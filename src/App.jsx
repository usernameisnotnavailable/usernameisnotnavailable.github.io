import {
    Route,
    createBrowserRouter,
    createRoutesFromElements, RouterProvider
} from "react-router-dom";
import FrontDisplay from "./components/FrontDisplay.jsx";
import CardSection from "./components/CardSection.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import RootLayout from "./layout/RootLayout.jsx";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<> <FrontDisplay/> <CardSection/> </>}/>
                <Route path="project/:projectId" element={<ProjectWrapper />}/>
            </Route>
        )
    )


    return (
        <RouterProvider router={router}/>
    )

}

export default App

import { useParams } from "react-router-dom";
import {projects} from "./data/projects-data.js";

function ProjectWrapper() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) return <p>Project not found</p>;

    return <ProjectPage {...project} />;
}
