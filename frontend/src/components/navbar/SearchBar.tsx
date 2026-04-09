import { Search } from "lucide-react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        className="search-input"
        placeholder="Search data..."
      />
    </div>
  );
}

export default SearchBar;
