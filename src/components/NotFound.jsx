import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>404 | Page not found</h2>
            <Link className="project-links" to="/">← Back to Portfolio</Link>
        </div>
    );
};

export default NotFound;