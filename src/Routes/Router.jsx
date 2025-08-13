import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Components/Customs/About";

import Projects from "../Components/Customs/Projects";
import ProjectDetail from "../Components/Customs/ProjectDetail";
import MySkills from "../Components/Customs/MySkills";
import ContactForm from "../Components/Customs/Contact";
import Services from "../Components/Customs/Services";

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
            },
            {
                path: "skill",
                element: <MySkills/>
            },
            {
                path: "projects",
                element: <Projects/>
            },
              
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "projects/:id",
                element: <ProjectDetail/>
            }

        ]
    }
])

export default router;