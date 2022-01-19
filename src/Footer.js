import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
        <div className="f">
            <a className="footer0">Julian Robert Tanja</a>
            <br></br>
            
            <table className="t"> 
                <tr>
                    <th>
                        <a href="https://www.linkedin.com/in/juliantanja" target="_blank"> LinkedIn </a>
                    </th>
                    <th>
                        <a href="https://github.com/JulianTanja" target="_blank"> GitHub </a>
                    </th>
                </tr>
            </table>
            
            <br/>
            <br/>
        </div>
        
    )
}

export default Footer;