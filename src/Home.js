import React from 'react';
import './Home.css';

function Home () {
    return (
        <div className="backg1">
            <h1 className="homeheader"> 👋 Hello there, I'm Julian. <br></br>
            Welcome to my website!</h1>

            <h3 className="homeheader2"> I am a third-year student at Boston University actively seeking <br></br>
            Software Engineering internships 👨‍💻 for Summer 2022. </h3>

            <br></br>
            <div className="projects">
                <h2 className="title-projects"> 
                    🚧 My Projects.
                </h2>
                <h3 className="project1">
                    ⏲️ Pomodoro Timer Web App
                    <a className="project11">
                        <br/>
                        A project designed to aid in productivity using the Pomodoro technique, 
                        this web app was created using Streamlit, an open-source app framework. 
                    </a>
                </h3>
                <h3 className="project2">
                    ⚕️ MediLoc: Optimal Location Finder in Rural Indonesia
                    <a className="project21">
                        <br/>Designed the UI/UX of this project for the GarudaHacks hackathon
                        in August 2020 using Figma. 
                        
                    </a>
                </h3>
                
                
            </div>
            

            <br></br>
            <br></br>
        </div>

    )
}

export default Home;