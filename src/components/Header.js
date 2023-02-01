import React from "react";
import logo from "../images/troll-face.png"

export default function Header () {
    return (
        <header>
            <img className="header-image" src={logo} />
            <span className="header-title">Meme Generator</span>
            <span className="header-subtitle">React Course - Project 3</span>
        </header>
    );
}