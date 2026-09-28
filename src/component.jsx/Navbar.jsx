function Navbar()
{
    return(
        <>
        <style>
            {` 
            h3{
            color:white;
            }
            a{
            text-decoration:none;
            color:white;
            }
            a:hover{
            color:black;
            }

            `}
        </style>
     
 <nav className="navbar border-bottom border-body" data-bs-theme="dark">
    <h3>Chethan M</h3>
     <a href="#home">Home</a>
     <a href="#about">About</a>
     <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>

</nav>
   



    
        </>
    );
}
export default Navbar;