import { AuthMenu } from "../../AuthArea/AuthMenu/AuthMenu";
import "./SiteHeader.css";

export function SiteHeader(): JSX.Element {
    return (
        <div className="SiteHeader">
			<h1>Northwind Website</h1>
            <AuthMenu/>
        </div>
    );
}
