import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (  
    <nav className="navbar">
        <ul className="navlist">
            <li className="brand">
            Clicky Game
            </li>
            <li className="message">{props.message}
            </li>
            <li className="score">Score: {props.count} | Top Score:{props.topScore}</li>
        </ul>
    </nav>
    )
}

export default Navbar;
