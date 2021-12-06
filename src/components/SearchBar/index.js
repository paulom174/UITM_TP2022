import React, { useState } from "react";
import './style.css';


const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <form action={`/${search}`} method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            onChange={event => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
    </form>
)};

export default SearchBar;