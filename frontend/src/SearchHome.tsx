import { useState } from "react";
import logo from "./assets/docsearch-logo.png";
import "./styles/SearchHome.css";
export default function SearchHome() {

    const [health, setHealth] = useState("");
    const [search, setSearch] = useState(null);
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
        const searchData = await response.json();
        setSearch(searchData);
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
                    </div>
                </div>
            </nav>
        </header>
        <main className="main-content">
           <h1 className="intro-title">Welcome to DocSearch!!!</h1>
           <form className="search-container">
            <input placeholder="type in your search" type="search" className="search-input"></input>
            <button  className="search-icon">Send</button>
           </form>
        </main></>
    );
    
}