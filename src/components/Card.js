import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import coverImg from '../images/katie-zaferes.png'

export default function Card() {
    return (
        <section>
            <div className="card">
                <img className="card-image" src={coverImg} />
                <div className="card-stats">
                    <FontAwesomeIcon className="card-star" icon={faStar} />
                    <span> 5.0 </span>
                    <span class="gray"> (6). </span>
                    <span class="gray"> USA </span>
                </div>
                <p className="card-title">Life lessons with Katie Zaferes</p>
                <p className="card-price"><span class="bold">From $136</span> / person</p>
            </div>
        </section>  
    );
}