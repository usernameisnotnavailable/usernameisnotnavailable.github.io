import {Link} from "react-router-dom";
import "../styles/main.css";

export default function ProjectPage({
                                        title,
                                        description,
                                        tech,
                                        repoLink,
                                        demoVideo,
                                        screenshots,
                                        status
                                    }) {
    return (
        <div className="project-page">
            <h1 className="title">{title}</h1>
            <div className="project-description">

                <p className="section-title">Aim</p>
                <p>{description}</p>

                <p className="section-title"><strong>Status</strong></p>
                <p> {status}</p>
            </div>

            <div className="project-meta">
                <p className="section-title"><strong>Tech stack</strong></p>
                <ul>
                    {tech && tech.length > 0 && (
                        tech.map((item, key) => (
                            <li key={key}>{item}</li>
                        ))
                    )}
                </ul>
            </div>

            {demoVideo && (
                <div className="project-demo">
                    <video src={demoVideo} controls/>
                </div>
            )}

            {screenshots && screenshots.length > 0 && (
                <div className="project-screenshots">
                    {screenshots.map((src, i) => (
                        <div key={i}>
                            <div>
                                <img
                                    src={src}
                                    alt={`${title} screenshot ${i + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}


            <div className="project-links">
                {repoLink && (
                    <a href={repoLink} target="_blank" rel="noreferrer">
                        View Repository
                    </a>
                )}
                <Link to="/">← Back to Portfolio</Link>
            </div>
        </div>
    );
}
