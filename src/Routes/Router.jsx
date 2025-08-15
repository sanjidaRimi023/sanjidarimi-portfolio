import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Components/Customs/ProjectDetail";
import MySkills from "../Components/Customs/MySkills";
import Services from "../Components/Customs/Services";
import Projects from "../Components/Customs/Projects";
import MoreAboutMe from "../Components/Customs/MoreAboutMe";

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
                path: "more-about-me",
                element: <MoreAboutMe/>
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
                path: "projects/:id",
                element: <ProjectDetail/>
            },
            {
                path: "services",
                element: <Services/>
            },
            


        ]
    }
])

export default router;