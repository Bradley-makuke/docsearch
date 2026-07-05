import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/docsearch.svg";
import scan from "./assets/scan-icon.svg";
import "./styles/SearchHome.css";
export default function SearchHome() {
    const navigate = useNavigate();
    const [health, setHealth] = useState("");
    const [search, setSearch] = useState("");
    const getHealth = async () => {
        const res = await fetch("http://localhost:5250/api/search/health",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.text();
        setHealth(data);
    };
    const getSearchResults = async() => {
        const response = await fetch("http://localhost:5250/api/search", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const searchData = await response.text();
        setSearch(searchData);

        navigate("/results", { state: { searchData } });
    };
    return (
        <>
        <header className="site-header">
            <img src={logo} alt="Docsearch Logo" />
            <nav className="site-nav">
                <div className="userprofile-container">
                    < div className="userprofile">
                        <div className="userprofile-image">
                            <img src="https://via.placeholder.com/150" alt="User Profile" />
                        </div>
                        <div className="userprofile-name">John Doe</div>
                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </div>
                </div>
            </nav>
        </header>
        <main className="main-content">
           <h1 className="intro-title">Welcome to DocSearch !</h1>
           <form className="search-container" onSubmit={(e) => {
                e.preventDefault();
                getSearchResults();
            }}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input placeholder="type in your search" 
                type="search" className="search-input" 
            />
            <div className="actions">
                <FontAwesomeIcon icon={faMicrophone}  className="microphone-icon"/>
                <img src={scan} alt="Scan Icon" className="scan-icon" />
            </div>
           </form>
        </main></>
    );
    
}