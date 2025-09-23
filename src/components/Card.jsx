import {Link} from "react-router-dom";

function Card( {title, description, languages, tech, to} ) {



    return <Link to={to} className="card-container">
        <div className="card">
            <div className="card-front">
                <h2 className="card-project-name">{title}</h2>
                <h3 className="card-project-body">{description}</h3>
            </div>
            <div className="card-back">
                <h3 className="card-project-body">Languages: {languages}</h3>
                <h3 className="card-project-body">Tech stack: {tech}</h3>
            </div>
        </div>
    </Link>
}

export default Card;