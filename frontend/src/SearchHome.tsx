import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import scan from "./assets/scan-icon.svg";
import "./styles/SearchHome.css";

export default function SearchHome() {
    const navigate = useNavigate();
    const [health, setHealth] = useState("");
    const [search, setSearch] = useState("");
    const [showSoundModal, setshowSoundModal] = useState(false);
    const [showScanModal, setShowScanModal] = useState(false);
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
        <Header/>
        <main className="main-content">
            {!showSoundModal && !showScanModal && (
                <>
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
                <FontAwesomeIcon icon={faMicrophone}  className="microphone-icon" onClick={() => setshowSoundModal(true)}/>
                <img src={scan} alt="Scan Icon" className="scan-icon" onClick={() => setShowScanModal(true)} />
            </div>
           </form>
           </>
        )}
        {showSoundModal && (
            <div className="record-modal">
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="recording-text">Listening.......</div>
                <button className="stop-button" onClick={() => setshowSoundModal(false)}>X</button>
                </div>
        )}
        {showScanModal && (
            <div className="modal scan-modal">
                <h2>Search with lens</h2>
                <div className="upload-box">
                    <p>Drag image or <span className="highlight">browse</span></p>
                </div>
                <p>Or</p>
                <input
                    type="text"
                    placeholder="Paste image link here"
                    className="link-input"
                />
                <button className="stop-button-2" onClick={() => setShowScanModal(false)}>X</button>
            </div>
        )}
        </main>
            </>
    );
    
}