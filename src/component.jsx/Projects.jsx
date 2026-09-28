export default function Projects()
{
    return(
        <section id="projects" className="container py-5">
            <h2 className="text-light text-center mb-4">Projects</h2>
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-5">
                    <div className="card text-bg-primary h-100">
                        <div className="card-body">
                            <h3 className="card-title">E-Learning Platform</h3>
                            <p className="card-text">
                                A web-based platform that brings learning resources and courses together,
                                helping learners access study material online.
                            </p>
                            <h4 className="h6">Technologies Used</h4>
                            <span className="badge text-bg-light me-2 mb-2">React</span>
                            <span className="badge text-bg-light me-2 mb-2">Bootstrap</span>
                            <span className="badge text-bg-light me-2 mb-2">Flask</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card text-bg-primary h-100">
                        <div className="card-body">
                            <h3 className="card-title">Farmer Shop Rental System</h3>
                            <p className="card-text">
                                A web-based system for organizing farmer shop rental information and
                                making rental details easier to manage.
                            </p>
                            <h4 className="h6">Technologies Used</h4>
                            <span className="badge text-bg-light me-2 mb-2">HTML</span>
                            <span className="badge text-bg-light me-2 mb-2">CSS</span>
                            <span className="badge text-bg-light me-2 mb-2">JavaScript</span>
                            <span className="badge text-bg-light me-2 mb-2">Node.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
