import React from "react";
import "./CharCard.css";

const CharCard = ({ id, name, image }) => (
    <div className="card h-100">
        <div
            className="card-img-top img"
            key={id}
            style={{ backgroundImage: `url(${image})` }}
        >
        </div>
        <div className="card-body">
            <pre className="name">{name}</pre>
        </div>
    </div>
)

export default CharCard;