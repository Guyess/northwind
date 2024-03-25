import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import "./EmployeeDetails.css";

export function EmployeeDetails(): JSX.Element {

    useTitle("Northwind | Employee details");

    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    const [employee, setEmployee] = useState<EmployeeModel>();
    

    useEffect(() => {                                                        //useEffect() lets you use a function that reaches outside of the project

        employeeService.getOneEmployee(id)
            .then(dbProduct => setEmployee(dbProduct))
            .catch(err =>notify.error(err));
    }, []);

    
    if (!employee) <Spinner/>

    return (
        <div className="EmployeeDetails">
			<h3>First Name: {employee?.firstName}</h3>
            <h3>Last Name: {employee?.lastName}</h3>
            <h3>Country: {employee?.country}</h3>
            <h3>City: {employee?.city}</h3>
            <h3>Birth Date: {employee?.birthDate}</h3>
            <img src={employee?.imageUrl} />

            <br /><br />

            <NavLink to="/employees">Back</NavLink>

            <span> </span>
        </div>
    );
}
