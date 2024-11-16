import {createBrowserRouter} from "react-router-dom";
import {ABOUT, HOME} from "./path-constans";
import {About} from "../pages/About/About";
import {Employees} from "../pages/Employees/Employees";
import {Error} from "../pages/Error/Error";
import {Layout} from "../widgets/layout/Layout";

export const router = createBrowserRouter([
    {
        path: HOME,
        errorElement: <Error/>,
        children: [
            {   path: HOME,
                element: <Layout/>,
                children: [
                    {
                        index: true,
                        element: <Employees/>,
                    },
                    {
                        path: ABOUT,
                        element: <About/>,
                    },

                ]
            }
        ]
    }
],
    {future: {v7_normalizeFormMethod: true, v7_fetcherPersist: true, v7_partialHydration: true, v7_relativeSplatPath: true, v7_skipActionErrorRevalidation: true}});