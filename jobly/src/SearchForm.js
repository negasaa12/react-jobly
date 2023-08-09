import React from "react";
import { useState } from "react";


function SearchForm({ search}) {
  
  
    const [searchTerm, setSearchTerm] = useState("");
  

    function handleSubmit(evt) {
     
      evt.preventDefault();
      search(searchTerm.trim() || undefined);
      setSearchTerm(searchTerm.trim());
    }
        console.log(searchTerm);
  
    function handleChange(evt) {
      setSearchTerm(evt.target.value);
    }
  
    return (
        <div className="SearchForm mb-4">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
                className="form-control form-control-lg flex-grow-1"
                name="searchTerm"
                placeholder="Enter search term.."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </form>
        </div>
    );
  }
  
  export default SearchForm;