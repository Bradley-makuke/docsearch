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
        <header>
            <img src={logo} alt="Docsearch Logo" />
            <nav>
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
        <body>
           <button onClick={getHealth}>Test api</button>
           {health && <div>{health}</div>}
            </body>
        </>
    );
    
}