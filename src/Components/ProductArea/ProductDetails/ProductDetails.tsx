import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import "./ProductDetails.css";

export function ProductDetails(): JSX.Element {

    useTitle("Northwind | Product details");

    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {                                                        //useEffect() lets you use a function that reaches outside of the project

        productService.getOneProduct(id)
            .then(dbProduct => setProduct(dbProduct))
            .catch(err =>notify.error(err));
    }, []);


    async function deleteMe() {
        try{
        const sure = window.confirm("Are you sure?");
        if (!sure) return;

        await productService.deleteProduct(id);
        notify.success("Product has been deleted");
        navigate("/products");
        }

        catch (err:any)
        {
            notify.error(err);
        }

    }

    if (!product) <Spinner/>


    return (
        <div className="ProductDetails">

            <h3>Name:{product?.name}</h3>
            <h3>price:{product?.price}</h3>
            <h3>Stock:{product?.stock}</h3>
            <img src={product?.imageUrl} />

            <br /><br />

            <NavLink to="/products">Back</NavLink>

            <span> </span>

            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>


            <span> </span>

            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>


        </div>
    );
}
