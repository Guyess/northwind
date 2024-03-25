import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export function ProductList(): JSX.Element {

    useTitle("Northwind | Products");

    const [products, setProducts] = useState<ProductModel[]>([]); //empty products array

    useEffect(() => {                        //useEffect() lets you use a function that reaches outside of the project

        productService.getAllProducts()
            .then(dbProducts => setProducts(dbProducts))
            .catch(err => notify.error(err))
    })

    return (
        <div className="ProductList">

            {products.length === 0 && <Spinner />}

            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
