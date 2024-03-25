import "./Home.css";
import imageSource from "../../../Assets/Images/M&ms.png";
import { useEffect } from "react";
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {

    useTitle("Northwind | Home");


    return (
        <div className="Home">
            <img src={imageSource} />
        </div>
    );
}
