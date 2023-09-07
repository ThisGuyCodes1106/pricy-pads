'use client'

import React from 'react'
import { useState } from "react";
import SearchCity from './SearchCity';

function SearchBar() {

    const [city, setCity] = useState('')

    const handleSearch = () => {}

  return (
    <form action="" className="searchBar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchCity
                city={city}
                setCity={setCity} 
            />
        </div>
    </form>
  )
}

export default SearchBar