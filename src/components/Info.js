import React from "react";
import profilePic from "../images/unsplash-pic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <div className="info">
            <img className="profile-pic" src={profilePic}></img>
            <div className="profile-details">
                <p className="name">Laura Smith</p>
                <p className="title">Frontend Developer</p>
                <p>laurasmith.website</p>
                <div className="actions">
                    <button className="action-item"><FontAwesomeIcon className="action-icon" icon={faEnvelope} />Email</button>
                    <button className="action-item blue"><FontAwesomeIcon className="action-icon" icon={faLinkedin} />LinkedIn</button>
                </div>
            </div>
        </div>
    );
}