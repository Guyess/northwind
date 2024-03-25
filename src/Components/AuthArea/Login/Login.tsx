import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";
import "./Login.css";

export function Login(): JSX.Element {

    const {register, handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel){
        try{
            await authService.login(credentials);
            notify.success("Welcome Back!");
            navigate("/home");
        }
        catch(err: any){
            notify.error(err);
        }
    }
    return (
        <div className="Login">
			
            <form onSubmit={handleSubmit(send)}>

                <label>Email:</label>
                <input type="email"{...register("email")}/>

                <label>Password:</label>
                <input type="password"{...register("password")}/>

                <button>Login</button>

            </form>
        </div>
    );
}
