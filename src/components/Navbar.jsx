import React from "react";

const Navbar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><a href='#'>Profle</a></li>
                <li><a href='#'>Messages</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Music</a></li>
                <li className="settings"><a href='#'>Settings</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;
