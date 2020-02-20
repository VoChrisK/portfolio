import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <li className="link-content"><button onClick={() => scrollTo("#about")}>About</button></li>
                <li className="link-content"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
                <li className="link-content"><button href="#">Skills</button></li>
                <li className="link-content"><button href="#">Contact</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;