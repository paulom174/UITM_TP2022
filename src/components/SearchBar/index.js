import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <form action={`/days/${search}`} method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search for a City"
            // name="fname"
            onChange={event => setSearch(event.target.value)}
        />
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
)};

export default SearchBar;