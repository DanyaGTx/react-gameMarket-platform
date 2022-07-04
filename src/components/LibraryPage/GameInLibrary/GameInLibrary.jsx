import React, { useState } from 'react'
import './GameInLibrary.css'

const GameInLibrary = ({game}) => {
    
  const getDataFromLocalStorage = window.sessionStorage.getItem(game.title);

  const [lastStart, setLastStart] = useState(getDataFromLocalStorage ? getDataFromLocalStorage : "Haven't launched yet")
 

  const setLastDate = () =>{
    let date = new Date();

    const dateInStorage = date.toString().slice(0,25);

    // localStorage.setItem(game.title, dateInStorage);

    window.sessionStorage.setItem(game.title, dateInStorage);

    const getDataFromLocalStorage = window.sessionStorage.getItem(game.title);
   
    setLastStart(getDataFromLocalStorage);
  }

  return (
    <div className='gameInLibrary'>
        <img className='game-image' src={game.image} alt={game.title}/>
        <div className='game-information'>
            <h1 className='game-title'>{game.title}</h1>
            <h3 className='game-lastStart'>Last start: {lastStart}</h3>
            <button onClick={setLastDate} className='game-play'>Play</button>
        </div>
        
    </div>
    
  )
}

export default GameInLibrary