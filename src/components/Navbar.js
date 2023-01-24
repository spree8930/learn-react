import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

export default function Navbar () {
    return (
        <nav>
            <FontAwesomeIcon size="2x" icon={faEarthAmerica} />
            <span className="nav-title">my travel journal.</span>
        </nav>
    );
}