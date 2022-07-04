import React from 'react'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { deleteItemFromCart, setItemsInCart } from '../../redux/cart/reducer';
import { useAuth } from '../../auth/base';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/reducer';
import AddAndDeleteButton from '../AddAndDeleteButton/AddAndDeleteButton';

const Card = ({game,openLogin}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  
  const openGameView = (e) =>{
    e.stopPropagation();
    dispatch(setCurrentGame(game))
    navigate(`/game/${game.id}`); 
  }
 
 

  return (
    <div className='game-card'>
      <div>
        <img onClick={openGameView} className='game-card__image' src={game.image} alt="" />
        <h2 className='game-card__title'>{game.title}</h2>
      </div>
      <div>
        <p className='game-card__genres'>{game.genres.map((genre,id )=> <span className='game-card__genre' key={id}>{genre}</span>)}</p>
        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className='game-card__price'>{game.price}$</h3>
          <AddAndDeleteButton game={game} openLogin={openLogin}  />
        </div>
      </div>
      
    </div>
  )
}

export default Card