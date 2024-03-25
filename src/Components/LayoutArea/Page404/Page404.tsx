import { useTitle } from "../../../Utils/UseTitle";
import "./Page404.css";

export function Page404(): JSX.Element {

    useTitle("Northwind | Page not found");

    return (
        <div className="Page404">
			<p>The page you are looking for doesn't exist. </p>
            
        </div>
    );
}


//<iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
