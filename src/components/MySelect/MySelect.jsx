import React from 'react'
import './MySelect.css'

const MySelect = ({option, defaultValue , value, sortGames}) => {
  return (
    <div className='sort-games__block'>
      
        <select value={value} onChange={event => sortGames(event.target.value)} className='sort-games__select' >
            
            <option  disabled value="">{defaultValue}</option>
             {option.map(option => <option  key={option.name} value={option.value}>{option.name}</option>)}   
        </select>
    </div>
  )
}

export default MySelect