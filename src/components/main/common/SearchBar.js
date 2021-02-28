import React, { useState, useContext } from 'react'
import SearchBar from "material-ui-search-bar";
import ThemeContext from '../../layout/ThemeContext';

const CustomSearchBar = () => {

    const { onSearch } = useContext(ThemeContext)
    const [searchInput, setSearchInput] = useState('')

    return (
        <SearchBar
            value={searchInput}
            onChange={newValue => setSearchInput(newValue)}
            onRequestSearch={() => onSearch(searchInput)}
            style={{ flex: 3, height: 40 }}
        />
    )
}

export default CustomSearchBar
