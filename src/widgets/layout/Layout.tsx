import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className={'main_container'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
);
};
