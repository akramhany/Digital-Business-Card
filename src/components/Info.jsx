import React from "react"
import personal_image from "./images/personal-image.jpg" 
import email_logo from "./images/email.png"
import linkedin_logo from "./images/linkedin.png"


export default function Info() {
    return (
        <div className="info">
            <img className="info-image" src={personal_image} alt="" />
            <div className="info-data">
                <h1 className="name">Akram Hany</h1>
                <h3 className="title">Full Stack Developer</h3>
                <h4 className="website-url">akramhany.website</h4>
            </div>
            <div className="info-buttons">
                <button className="info-email-btn">
                    <img src={email_logo} alt="" />
                    Email
                </button>
                <a href="https://www.linkedin.com/in/akramhany/" target="_blank">
                    <button className="info-linkedin-btn">
                        <img src={linkedin_logo} alt="" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}