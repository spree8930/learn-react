import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.imageUrl} />
            <div className="card-content">
                <span>
                    <FontAwesomeIcon className="card-icon" icon={faLocationDot} />
                    <span className="card-location">{props.location}</span>
                    <a className="card-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <p className="card-title">{props.title}</p>
                <span className="bold">{props.startDate} - {props.endDate}</span>
                <p className="card-desc">{props.description}</p>
            </div> 
        </div>
    )
}


