import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template02 from "../pages/Template02";
import TaylorCookContainer from "../components/component/TaylorCook/TaylorCookContainer";
import Template03 from "../pages/Template03";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'template-01',
                element:<TaylorCookContainer/>
            },
            {
                path:'template-02',
                element:<Template02/>
            },
            {
                path:'template-03',
                element:<Template03/>
            },
        ]
    }
])

