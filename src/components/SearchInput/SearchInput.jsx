import React, { useState } from 'react'
import './SearchInput.css'
import search__ico from '../../img/search-ico.png'
const SearchInput = ({setSearch,search,onChangeSearch}) => {
 

  return (
    <div className='search__block'>
      <input onChange={e => onChangeSearch(e)} value={search} className='search-input' placeholder='Search...' /> 
      <img className='search-input__ico' src={search__ico} alt="" />
      {search && <span onClick={() => setSearch('')} className='search-input__reset'>X</span>}
    </div>
       
  )
}

export default SearchInput