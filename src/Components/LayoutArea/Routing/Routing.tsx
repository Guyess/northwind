import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";
import { Login } from "../../AuthArea/Login/Login";
import { Register } from "../../AuthArea/Register/Register";
import { EmployeeDetails } from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
//import { About } from "../../AboutArea/About/About";
import { Home } from "../../HomeArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";

export function Routing(): JSX.Element {

    //Descrive where the About component located:
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    //Load About component only when browsing to "/about" rout:
    const suspenseAbout = <Suspense fallback={<Spinner />}> <LazyAbout /></Suspense>
    return (
        <div className="Routing">
            <Routes>

                <Route path="/register" element ={<Register />}/>
                <Route path="/login" element ={<Login />}/>

                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />

                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/details/:id" element={<EmployeeDetails />} />


                <Route path="/about" element={suspenseAbout} />
                <Route path="/contact-us" element={<ContactUs/>} />


                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
