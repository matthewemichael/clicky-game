import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (  
<nav className="navbar">
    <ul className="navlist"><li className="brand">
        <strong>Clicky Game</strong>
        </li>
        <li>Click an image to begin!
        </li>
        <li className="score">Score: {props.count} | Top Score:{props.topScore}</li>
    </ul>
</nav>
)
}

export default Navbar;
