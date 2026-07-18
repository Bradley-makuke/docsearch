import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/docsearch.svg";
import profile from "../assets/default-profile.svg"
import "../styles/Header.css";

export default function Header(){
    return (
        <header className="site-header">
            <img src={logo} alt="Docsearch Logo" />
            <nav className="site-nav">
                <div className="userprofile-container">
                    < div className="userprofile">
                        <div className="userprofile-image">
                            <img className="userprofile-img" src={profile} alt="User Profile" />
                        </div>
                        <div className="userprofile-name">John Doe</div>
                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </div>
                </div>
            </nav>
        </header>

    );
}