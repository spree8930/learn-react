import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon size="3x" className="icon" icon={faTwitterSquare} />
            <FontAwesomeIcon size="3x" className="icon" icon={faFacebookSquare} />
            <FontAwesomeIcon size="3x" className="icon" icon={faInstagramSquare} />
            <FontAwesomeIcon size="3x" className="icon" icon={faGithubSquare}  />
        </div>
    );
}