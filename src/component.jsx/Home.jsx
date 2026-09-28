import chethanImage from "../assets/chethan.jpeg";

export default function Home()
{
    return(
        <div id="home">
        <style>
            {` 
            .btn{
            background-color:blue;
            color:white;
            border-radius:20px;
            margin-top:10px;
            }
            .myclass
            {
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:30px;
            }
            .intro-copy{
            display:flex;
            flex-direction:column;
            }
            .heading{
            color:white;
            font-family: "Poppins", sans-serif;
            margin-top:10px;
            }
            .profile-image{
            width:180px;
            height:180px;
            max-width:100%;
            object-fit:cover;
            border :2px solid blue;
            }
            .para{
            font-weight:bold;
            color:#f3f5f4;
            }
            .para{
               text-align:justify;
            }
            img:hover{
            transform:scale(1.1);
            transition:transform 0.3s ease-in-out;
            }

            `}
        </style>
        
        <div className="myclass">
                <div className="intro-copy">
        <button type="button" className="btn">Available for opportunity</button>
        <h1 className="heading">Hii, I'm Chethan M </h1>
        <h2 className="heading">Full Stack Developer</h2>
                <p className="para">I'm an MCA student passionate about software development and technology.
                    I have skills in Python, HTML, CSS, JavaScript, and React for web development.
                    I'm focused on building practical projects and improving my development skills for a career in the software industry.</p>
         <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary"> 
        <a href="https://www.linkedin.com/in/chethan-m-048600290/">LinkedIn</a>

        </button>
        <button type="button" class="btn btn-outline-primary">
            <a href="https://github.com/Chethanmanjunathnavee">Projects</a>
        </button>
       </div>
       
       
       
       </div>
        <img src={chethanImage}
            alt="Chethan M"
            className="rounded-circle profile-image"/>

        </div>
        </div>
    );
}
