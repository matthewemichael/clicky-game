import React from "react";
import "./CharCard.css";

const CharCard = ({ id, name, image }) => (
    <div className="card">
        <div
            className="card-img-top img"
            key={id}
            style={{ backgroundImage: `url(${image})` }}
        >
        </div>
        <div className="card-body">
            <h3 className="name">{name}</h3>
        </div>
    </div>
)

export default CharCard;