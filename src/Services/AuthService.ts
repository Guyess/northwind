import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import {jwtDecode} from "jwt-decode";
import { authActions, store } from "../Storage/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class AuthService {

    public constructor(){

        //Get token from local storage
        const token =localStorage.getItem("token");
        
        //If exists
        if(token){
            //Extract token container:
            const container = jwtDecode<{user: UserModel}>(token);

            //Extract token user:
            const dbUser = container.user;

            //Save to global state:
            store.dispatch(authActions.login(dbUser));
        }
    }

	public async register (user: UserModel):Promise<void>{

        //send user to backend, get back token
        const response = await axios.post<string>(appConfig.registerUrl, user);

        //Extract container:
        const token = response.data;

        //Save tocken to local storage:
        localStorage.setItem("token",token);

        //Extract token container:
        const container = jwtDecode<{user: UserModel}>(token);

        //Extract token user:
        const dbUser = container.user;

        //Save to global state:
        store.dispatch(authActions.register(dbUser));
    }


    public async login (user: CredentialsModel):Promise<void>{

        //send user to backend, get back token
        const response = await axios.post<string>(appConfig.loginUrl, user);

        //Extract container:
        const token = response.data;

        //Save tocken to local storage:
        localStorage.setItem("token",token);

        //Extract token container:
        const container = jwtDecode<{user: UserModel}>(token);

        //Extract token user:
        const dbUser = container.user;

        //Save to global state:
        store.dispatch(authActions.login(dbUser));
    }


    public logout(): void{
        //Remove user from global storage:
        store.dispatch(authActions.logout());

        //Remove tocken from local storage:
        localStorage.removeItem("token");
    }





}

export const authService = new AuthService();
