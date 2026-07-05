import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const { searchData } = location.state || {};

  return (
    <main className="results-page">
      <h2>Search Results</h2>
      {searchData ? (
        <pre>{JSON.stringify(searchData, null, 2)}</pre>
      ) : (
        <p>No results found.</p>
      )}
    </main>
  );
}
