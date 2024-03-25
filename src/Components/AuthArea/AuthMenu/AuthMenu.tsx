
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import { authService } from "../../../Services/AuthService";
import { AppState, store } from "../../../Storage/store";
import { notify } from "../../../Utils/Notify";
import "./AuthMenu.css";

export function AuthMenu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate= useNavigate();

    function logout():void{
        authService.logout();
        notify.success("Good Bye");
        navigate("/home");
    }

    if(!user){
        return(
            <div className="AuthMenu">
            <span>Hello Guest |</span>
            <NavLink to ="/login"> Login</NavLink>
            <span> | </span>
            <NavLink to ="/register"> Register</NavLink>

        </div>
        )}
        

    return (
        <div className="AuthMenu">
            <span>Hello {user.firstName} {user.lastName} |</span>
            <NavLink to ="#" onClick={logout}>Logout</NavLink>
        </div>
    );
}
