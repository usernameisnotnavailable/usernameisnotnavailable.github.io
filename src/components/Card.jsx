

function Card( {title, description, languages, tech} ) {



    return <div className="card-container">
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
    </div>
}

export default Card;