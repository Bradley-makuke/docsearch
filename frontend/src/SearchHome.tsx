import { useState } from "react";
import logo from "./assets/docsearch-logo.png";
import "./styles/SearchHome.css";
export default function SearchHome() {

    const [health, setHealth] = useState("");
    const getHealth = async () => {
        const res = await fetch("http://localhost:5250/api/health",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.text();
        setHealth(data);
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
           <button onClick={getHealth}>Test api</button>
           {health && <div>{health}</div>}
            </main>
        </>
    );
    
}