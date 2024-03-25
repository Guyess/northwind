import { PayloadAction } from "@reduxjs/toolkit";
import { EmployeeModel } from "../Models/EmployeeModel";
import { ProductModel } from "../Models/ProductModel";
import { UserModel } from "../Models/UserModel";


//Product reducers
//-----------------------

//Init all product:
export function initProducts(currentState: ProductModel[], 
                                action: PayloadAction<ProductModel[]>): ProductModel[] {
    
    return action.payload; //payload = product array.
}

//Add one product:
export function addProduct (currentState: ProductModel[], 
                                action: PayloadAction<ProductModel>) :ProductModel[]{
    
    return [...currentState , action.payload];
}

//Update prodcut
export function updateProduct (currentState: ProductModel[], 
                                    action: PayloadAction<ProductModel>) :ProductModel[]{

        return currentState.map(p => p.id === action.payload.id ? action.payload :p);
    //const newState = [...currentState];
    //const index = newState.findIndex(p => p.id === action.payload.id);
    //if (index >= 0) newState [index] = action.payload;
    //return newState;
}

//Delete product:
export function deleteProduct(currentState: ProductModel[], 
                                action: PayloadAction<number>) :ProductModel[]{

        return currentState.filter(p => p.id !== action.payload);
    //const newState = [...currentState];
    //const index = newState.findIndex(p => p.id === action.payload);
    //if (index >= 0) newState newState [index] = action.payload;
    //return newState;
}


//Empoyee reducers
//--------------------

export function initEmployees(currentState: EmployeeModel[], 
                                action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {

return action.payload; 
}

export function addEmployee (currentState: EmployeeModel[], 
                                action: PayloadAction<EmployeeModel>) :EmployeeModel[]{

return [...currentState , action.payload];
}

export function updateEmployee (currentState: EmployeeModel[], 
                                    action: PayloadAction<EmployeeModel>) :EmployeeModel[]{

return currentState.map(p => p.id === action.payload.id ? action.payload :p)
}


export function deleteEmployee(currentState: EmployeeModel[], 
    action: PayloadAction<number>) :EmployeeModel[]{

return currentState.filter(p => p.id !== action.payload);

}


//Auth Reducers
//---------------------

export function register(currentState: UserModel, action: PayloadAction<UserModel>):UserModel{
    return action.payload;
}

export function login(currentState: UserModel, action: PayloadAction<UserModel>):UserModel{
    return action.payload;
}

export function logout(currentState: UserModel, action: PayloadAction):UserModel{
    return null;
}










