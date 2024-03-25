import { Home } from "../../HomeArea/Home/Home";
import { Copyright } from "../Copyright/Copyright";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import { SiteHeader } from "../SiteHeader/SiteHeader";
import css from "./Layout.module.css";

export function Layout(): JSX.Element {
    return (
        <div className={css.Layout}>
            <header>
                <SiteHeader />
            </header>
            <aside>
                <Menu />
            </aside>
            <main>
                <Routing />
            </main>
            <footer>
                <Copyright />
            </footer>

        </div>
    );
}
