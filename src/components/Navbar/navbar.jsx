import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
    <div className="Navbar" id='navbar'>
        <h1>Joker</h1>
        <h3>Why so seriously {props.name} {props.lastname}</h3>
    </div> 
    )
}

export default Navbar;