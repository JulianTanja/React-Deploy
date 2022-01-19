import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return(

        <div className="links">

            <li className="links1">
                <Link to="/">Home</Link>
            </li>
            <li className="links2">
                <Link to="/About">About</Link>
            </li>
            <li className="links3">
                <a href="https://drive.google.com/file/d/1bFzPlm7QUoUU1L3asTclPUglzT2A16t2/view?usp=sharing" target="_blank">Resume</a>
            </li>

        </div>
        
    )
}

export default NavBar;