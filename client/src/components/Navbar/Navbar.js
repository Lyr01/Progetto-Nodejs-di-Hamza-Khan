import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    },[])
    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="list" onClick={toggleNav}>
                <Link to="/" className="items" > Home Page</Link>
                <Link to="/upload" className="items">Segnala Inquinamento</Link>
                <Link to="/post" className="items">Tutte le segnalazioni</Link>
            </ul>
            )}
            
            <button className="btn" onClick={toggleNav}>Menu</button>
        </nav>
    )
}

export default Navbar
