import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';


function NavBar(){


    return (
    <div className="nav">
        <div className='navbar'>
        <Link to="/welcomepage" ><img className="jtdimagesize" src="resources/jtdimage.jpeg" alt="img" /></Link>
        </div>

        <div className="navbar" >
        <Link to="/homepage" ><img className="imagesize1" src="resources/livebook.png" alt="img" /></Link>;
        </div>
        <div className="navbar1">
        <Link to='/signup'><img className="imagesize2" src="resources/signupimage.png" alt="img" /></Link>
        </div>
    </div>
    )
}
export default NavBar;