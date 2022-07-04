import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddAndDeleteButton from '../AddAndDeleteButton/AddAndDeleteButton'
import './GameViewPage.css'

const GameViewPage = ({openLogin}) => {
  const game = useSelector(state => state.game.currentGame)
  const navigate = useNavigate();
  if(!game){
    return navigate('/'); 
   
  }
  return (  
      <div className='container'>
        <div className='game-view'>
          <img className='game-view__image' src={game.image} alt="" />
          <div className='game-view__info'>
            <h1 className='game-view__title'>{game.title}</h1>
            <p className='game-view__genres'>Genres: {game.genres.map(genre => <span className='game-view__genre'>{genre}</span>)}</p>
            <p className='game-view__description'>{game.description}</p> 
            <h2 className='game-view__price'>{game.price}$</h2>
            <div className='game-view__button'>
              <AddAndDeleteButton openLogin={openLogin} game={game} />
            </div>
          </div>
        </div>
        <div className='game-view__video'>
          <iframe width="100%" height="500" src={game.video}></iframe> 
        </div>  
      </div>

  )
}

export default GameViewPage