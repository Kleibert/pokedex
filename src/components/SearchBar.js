import React from 'react';

const Search = (props) => {

  return (
    <div className="search">
      <label htmlFor="search" className="search-label"> Search a Pokemon</label>
      <input
      placeholder="Search a pokemon"
        value={props.term}
        onChange={(e) => props.searchTerm(e.target.value)}
        className="input"
      />
      <button onClick= {() => props.searchTerm(props.term)} className="btn">Search</button>
    </div>
  )
}
export default Search;