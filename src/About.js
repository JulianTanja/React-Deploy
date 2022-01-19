import React from 'react';
import './About.css';

function About () {
    return (
        <div className="container">
            <div className="title">
                <h1 className="titular-name"> 👾 Julian Robert Tanja. </h1>
            </div>
            <div className="container2">
                <div className="img-col">
                    <img className="image" src="/images/profilepic.jpg" alt=""/>
                </div>
                <div className="text-col">
                    <h4 className="titular-name2"> 
                        Hey there! I am a 20 year old third-year Indonesian student at 
                        Boston University majoring in Computer Science and minoring in Statistics. 
                        <br/>
                        <br/>My career aspirations are to be a data scientist or a software engineer. With the world becoming increasingly reliant on software technology, I have an interest to pursue this ever-changing and versatile field of work. 
                        <br/>
                        <br/>In my freetime, I like to go on morning runs, nature walks, and most importantly, being present in the moment.
                    </h4>
                    <br/>
                    <h3 className="skills">
                        Skills.  
                    </h3>

                    <table className="about-skill"> 
                        <tr>
                            <td>HTML</td>
                            <td>Javascript</td>
                            <td>CSS</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Java</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>OCaml</td>
                            <td>MySQL</td>
                            <td>PostgreSQL</td>
                        </tr>
                        <tr>
                            <td>R</td>
                            <td>Google Cloud</td>
                            <td>ReactJS</td>
                        </tr>
                        <tr>
                            <td>Git</td>
                            <td>Tableau</td>
                            <td>Figma</td>
                        </tr>
                    </table>

                </div>
            </div>
        <br></br>
        <br></br>
        </div>
    )
}

export default About;