import { useTitle } from "../../../Utils/UseTitle";
import { TotalCategories } from "../../CategoryArea/TotalCategories/TotalCategories";
import { Tune } from "../Tune/Tune";
import "./About.css";

export default function About(): JSX.Element {

    useTitle("Northwind | About");
    
    return (
        <div className="About">
			About...
            <Tune />
            <TotalCategories/>
        </div>
    );
}
