import React from 'react';

const Filter = ({pokemonPerPage, perPage}) =>{
    return(
        <div>
            <label htmlFor="pokemonFilter" className="sorter-label">Select a range</label>
            <select id="pokemonFilter" className="sorter-options" value={pokemonPerPage} onChange={(e)=>perPage(e.target.value)}>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="150">150</option>
            <option value="200">200</option>
            </select>
        </div>
    )
}
export default Filter;