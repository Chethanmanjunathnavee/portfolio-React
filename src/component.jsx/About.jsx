function About()
{
    return(
        <>
        <style>
            {`
            .about-page{
            padding:48px 16px;
            display:flex;
            align-items:center;
            justify-content:center;
            }
            .my{
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:24px;
            padding:16px;
            box-sizing:border-box;
            }
            .about-card{
            width:100%;
            max-width:28rem;
            }
            .about-stats{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            gap:16px;
            }
            .about-stats .card{
            width:100%;
            max-width:18rem;
            }
            `}
        </style>
        <section id="about" className="about-page">
<div className="my">
 <div className="card about-card">
    <div className="card-body">
        <h5 className="card-title">About Me</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
        <p className="card-text">I'm an MCA student passionate about software development and technology.
                    I have skills in Python, HTML, CSS, JavaScript, and React for web development.
                    I'm focused on building practical projects and improving my development skills
                     for a career in the software industry.</p>
  </div>
 </div>
 
    <div className="about-stats">
    <div className="card text-bg-primary">
    <div className="card-header">Projects</div>
    <div className="card-body">
        <h1 className="card-title">2</h1>
  </div>
  </div>
    <div className="card text-bg-primary">
    <div className="card-header">Technologies</div>
    <div className="card-body">
        <h1 className="card-title">4</h1>
  </div>
</div>
</div>
</div>
        </section>



        </>
    );
}
export default About;