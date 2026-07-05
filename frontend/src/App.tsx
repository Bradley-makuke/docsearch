import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import SearchResults from "./SearchResults";
import SearchHome from "./SearchHome";
function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchHome />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;