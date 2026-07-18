import { useLocation } from "react-router-dom";
import React, {useState, useEffect } from "react";
import Header  from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import scan from "./assets/scan-icon.svg";
import { mockSearchResults, type MockResult } from "./data/mockSearchResults";
import "./styles/SearchResults.css";

export default function SearchResults() : JSX.Element {
    const location = useLocation();
    const { searchData } = (location.state || {}) as {searchData?: any };

    //UI State
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<MockResult[]>([]);
    const [showSoundModal, setShowSoundModal] = useState(false);
    const [showScanModal, setShowScanModal] = useState(false);

    //Filters state 
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState< string| null>(null);

    //Pagination 
    const pages = Array.from({ length: 10 }, (_, i) => i + 1);
    const currentPage = 1;

    useEffect(() => {
      setResults(mockSearchResults);
    }, []);

    const getSearchResults = async () => {
      /* const response = await fetch("http://localhost:5250/api/search", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      const searchData = await response.json();
      */
    let filtered = mockSearchResults.slice();

    if(query.trim()) {
      const q = query.trim().toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
        filtered = filtered.filter((r) =>
          selectedCategories.includes(r.category)
        );
    }

    if (selectedTag) {
        filtered = filtered.filter((r) =>
        r.category.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }
      setResults(filtered);
      window.scrollTo({ top: 0, behavior: "smooth"});
    };

    const toggleCategory = (cat: string) => {
      setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

    const clearFilters = () => {
      setSelectedCategories([]);
      setSelectedTag(null);
    };
    

  return (
    <>
    <Header/>
    <form className="search-container" onSubmit={(e) => {
                        e.preventDefault();
                        getSearchResults();
            }}
            >
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input 
            placeholder="type in your search" 
            type="search"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            />
            {query && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => setQuery("")}
                aria-label="Clear"
              >
                ✕
              </button>
            )}
            <div className="actions">
                <FontAwesomeIcon icon={faMicrophone}  className="microphone-icon" onClick={() => setShowSoundModal((s) => !s)}/>
                <img src={scan} alt="Scan Icon" className="scan-icon" onClick={() => setShowScanModal((s) => !s)} />
            </div>
           </form>
    <main className="results-page">
      <div className="results-main">
      <h2 className="results-stats">Search Results</h2>
           {/* Results */}
           <div className="results-container">
            {results.length === 0 ? (
            <div className="no results">No results found</div>
            ) : (
            results.map((item) => (
              <article key={item.id} className="result-tile">
              <div className="result-body">
                <h3 className="result-title">{item.title}</h3>
                <p className="result-desc">{item.description}</p>
              </div>

              <div className="result-meta">
                <div className="meta-left">
                  <span className="result-path">{item.path}</span>
                  <span className="result-category">- {item.category}</span>
                </div>
                <button className="view-btn" type="button">
                  View Document
                </button>
              </div>
              </article>
            ))
          )}
      </div>
      {/* Pagination */}
      <nav className="pagination" aria-label="Pagination">
        <ul>
          {pages.map((p) =>(
            <li key={p} className={p === currentPage ? "active" : ""}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {p}
              </a>
              </li>
          ))}
              <li className="next">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Next &gt;&gt;
                </a> 
            </li>
        </ul>
      </nav>
      </div>

      <aside className="filters-section" aria-label="Filters">
        <div className="filters-header">
           <h3>Filters</h3>
           <button className="clear-filters" onClick={clearFilters}>
            Clear
           </button>
        </div>
        {/* Filter controls will go here */}
        <div className="filter-group">
            <h4>Categories</h4>
            {Array.from(
              new Set(mockSearchResults.map((r) => r.category))
            ).map((cat) => (
              <label key={cat} className="filter-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="filter-label">{cat}</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Most Popular Tags</h4>
            <div className="tags">
              {["OOP", "Java", "Programming", "Beginner"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`tag ${selectedTag === t ? "selected" : ""}`}
                  onClick={() => setSelectedTag((s) => (s === t ? null : t))}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
      </aside>
    </main>
    </>
  );
}
