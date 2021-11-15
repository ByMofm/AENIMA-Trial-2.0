import React from "react";
import './Footer.css';
import logofooter from "../Assets/logo/logo_02.svg"
import face from "../Assets/iconos/facebook.svg"
import insta from "../Assets/iconos/instagram.svg"


function Footer(){

    return(
        
         <div className="container-footer">
            <img src={logofooter} alt="Logo Footer" className="img-footer" />
            <div className="social">
                <img src={insta} alt="Logo Instagram" className="insta"/>
                <img src={face} alt="Logo Facebook" className="fb"/>
            </div>
        </div>

    )
}

export default Footer