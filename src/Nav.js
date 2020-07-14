import React, {useState, useEffect} from 'react'
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <h1 className="nav_logo nav_text_color">RAJFLIX</h1>
        </div>
    )
}

export default Nav
