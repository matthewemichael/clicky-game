import React from "react";
import "./CharCard.css";

function CharCard(props) {
    return (
        <div className="card h-100">
            <div className="card-img-top">
                <img alt="character" src={props.image} onClick ={() => props.clickImage(props.id)} />
            </div>
            <div className="card-body">
                <pre className="name">{props.name}</pre>
            </div>
        </div>
    )
}

export default CharCard;
