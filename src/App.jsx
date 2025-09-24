import {
    Route,
    createBrowserRouter,
    createRoutesFromElements, RouterProvider, Link
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
                <Route path='*' element={<NotFound />}/>
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
import NotFound from "./components/NotFound.jsx";

function ProjectWrapper() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) return <>
        <p>Project not found</p>
        <Link className="project-links" to="/">← Back to Portfolio</Link>
    </>;

    return <ProjectPage {...project} />;
}
