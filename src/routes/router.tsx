import {createBrowserRouter} from "react-router-dom";
import Employees from "/pages/Employees";
import {ABOUT, HOME} from "./path-constans";
import {About} from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: HOME,
        element: <div>Hello world!</div>,
    },
    {
        path: ABOUT,
        element: About,
    }
]);