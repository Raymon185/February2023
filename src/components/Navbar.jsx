import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><a href='#'>Profle</a></li>
                <li><a href='#'>Messages</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Music</a></li>
                <li className={classes.settings}><a href='#'>Settings</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;
