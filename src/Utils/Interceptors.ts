import axios from "axios";
import { tokenToString } from "typescript";

class Interceptors {

	public registerInterceptors(): void{
        axios.interceptors.request.use(requestObject =>{
            //Take tokem from local storga
            const token = localStorage.getItem("token");

            //If exists:
            if(token){
            requestObject.headers.Authorization="Bearer "+token;
            }
            
            return requestObject;
        });
    }
}

export const interceptors = new Interceptors();
