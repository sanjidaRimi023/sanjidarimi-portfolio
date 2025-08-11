import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Components/Customs/About";

const router = createBrowserRouter([
 
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About/>
            }

        ]
    }
])

export default router;