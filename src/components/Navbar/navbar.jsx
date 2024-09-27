import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
    <div className="Navbar" id='navbar'>
        <h1>My favorite bear</h1>
        <h3>My name is Sarah Mae {props.name} {props.lastname}</h3>
    </div> 
    )
}

export default Navbar;