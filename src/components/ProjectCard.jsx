function ProjectCard(prop) {
    return <div>
        <h2>{prop.name}</h2>
        <img src={prop.picture} alt={prop.text} />
    </div>
}

export default ProjectCard;