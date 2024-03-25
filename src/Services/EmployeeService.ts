import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { EmployeeModel } from "../Models/EmployeeModel";
import { actions, store } from "../Storage/store";

class EmployeeService {


    public async getAllEmployees(): Promise<EmployeeModel[]> {

        if (store.getState().employees) return store.getState().employees;
        
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);// gets array of employees from server
        const employees = response.data;
        store.dispatch(actions.initEmployees(employees));
        return employees;

        // const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);// gets array of employee from server
        // const employees = response.data;
        // return employees;
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        
        let employee = store.getState().employees?.find(p => p.id ===id);
        if(employee) return employee;

        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
        employee = response.data;
        return employee;

        // const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
        // const employee = response.data;
        // return employee;
    }
    
}
export const employeeService = new EmployeeService();