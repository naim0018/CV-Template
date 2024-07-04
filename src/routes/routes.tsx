import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template02 from "../pages/Template02";
import TaylorCookContainer from "../components/component/TaylorCook/TaylorCookContainer";
import Template03 from "../pages/Template03";
import Template04 from "../pages/Template04";
import Template11 from "../pages/Template11";
import Template10 from "../pages/Template10";
import Template09 from "../pages/Template09";
import Template05 from "../pages/Template05";

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
            {
                path:'template-04',
                element:<Template04/>
            },
            {
                path:'template-05',
                element:<Template05/>
            },
            {
                path:'template-09',
                element:<Template09/>
            },
            {
                path:'template-10',
                element:<Template10/>
            },
            {
                path:'template-11',
                element:<Template11/>
            },
        ]
    }
])

