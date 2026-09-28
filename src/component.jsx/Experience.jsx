export default function Experience()
{
    const skills = [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Prompt Engineering",
        "AI Model Integration",
        "Flask",
        "REST APIs",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "SQL",
        "Git",
        "GitHub",
    ];

    return(
        <section id="experience" className="container py-5">
            <h2 className="text-light text-center mb-4">Experience</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-9">
                    <article className="card h-100 bg-dark text-light border-secondary">
                        <div className="card-body p-4">
                            <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mb-3">
                                <div>
                                    <h3 className="h4 card-title mb-1">AI &amp; Python Full-Stack Intern</h3>
                                    <p className="text-info mb-0">KA Degree</p>
                                </div>
                                <span className="badge text-bg-secondary align-self-sm-start">Internship</span>
                            </div>
                            <p className="card-text text-light-emphasis">
                                Completed an internship focused on building Python-based web applications
                                and exploring how AI capabilities can be integrated into full-stack solutions.
                                Practiced developing application features across the frontend, backend, and data layers.
                            </p>
                            <h4 className="h6 mt-4 mb-3">Skills and technologies</h4>
                            <div className="d-flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span className="badge text-bg-secondary" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}