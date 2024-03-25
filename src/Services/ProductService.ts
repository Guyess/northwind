import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { actions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class ProductService {

    public async getAllProducts(): Promise<ProductModel[]> {
        //Check fists if ew have products in global state:
        if (store.getState().products) return store.getState().products;
        //Get products fron beckend:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);// gets array of products from server
        const products = response.data;
        //Save on global state:
        store.dispatch(actions.initProducts(products));
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        //If we habe the product - get in from the global store.
        let product = store.getState().products?.find(p => p.id ===id);
        if(product) return product;

        //If not- get it from beckend
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        
        //Sent product to backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; //Send text and files.
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        
        //Add product  to global state:
        store.dispatch(actions.addProduct(dbProduct));
    }



    public async updateProduct(product: ProductModel): Promise<void> {

        //Update in backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; //Send text and files.
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;

        //Update product in global state:
        store.dispatch(actions.updateProduct(dbProduct));
    }

    public async deleteProduct(id: number): Promise<void> {

        //Delete in backend
        await axios.delete(appConfig.productsUrl + id);
        
        //Delete from global state:
        store.dispatch(actions.deleteProduct(id));
    }

}

export const productService = new ProductService();
