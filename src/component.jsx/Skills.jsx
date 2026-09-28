export default function Skills()
{
    return(
    <>
    <section id="skills">
      <style>
        {`
        .skills-cards{
        display:grid;
        width:100%;
        max-width:70rem;
        margin:0 auto;
        padding:0 16px;
        box-sizing:border-box;
        grid-template-columns:repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
        gap:16px;
        }
        .skill-card{
        width:100%;
        }
        .cor
        {
        text-align:center;
        }
        button{
        border-radius:20px;
        border:2px solid black;
        }
        button:hover{
        background-color:blue;
        color:white;}
        `}
      </style>
      <div className="cor">
        <h3>Skills</h3><br></br>
        <h1>Technologies I work with</h1><br></br>
        <p>A collection of tools and technologies I use to bring ideas to life</p>
      </div>
      <div className="skills-cards">
        <div className="card text-bg-secondary mb-3 skill-card">
  <div className="card-header">Frontend</div>
  <div className="card-body">
    <p className="card-text">
        <button>HTML</button><br></br>
        <button>CSS</button><br></br>
        <button>React</button><br></br>
        <button>Bootstrap</button>
    </p>
  </div>
</div>
<div className="card text-bg-secondary mb-3 skill-card">
  <div className="card-header">Backend</div>
  <div className="card-body">
    <p className="card-text">
        <button>Flask</button><br></br>
        <button>Node.js</button>
       
    </p>
  </div>
</div>
<div className="card text-bg-secondary mb-3 skill-card">
  <div className="card-header">Tools</div>
  <div className="card-body">
    <p className="card-text">
        <button>Git</button><br></br>
        <button>GitHub</button><br></br>
        <button>VS Code</button>
    </p>
  </div>
</div>
        </div>
      </section>
</>
    );
}