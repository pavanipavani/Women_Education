import React from "react";
import './Welcomepage.css';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

function Welcomepage (){
    return (
        <div>
            <NavBar/>
            <div className="welcomepage">
                <img className="welcomeimage" src="resources/welcomeimg.png" alt="img" />
            </div>
            <Footer/>
        </div>
    )
}
export default Welcomepage;