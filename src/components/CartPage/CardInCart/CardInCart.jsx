import React from 'react';
import './CardInCart.css';
import bin from '../../../img/bin.png'
const CardInCart = ({id,title,image,description,price,deleteGame}) => {
  return (
    <div className='CardInCart'>
        <img className='CardInCart__image' src={image} alt="" />
        <div className='CardInCart__info'>
            <div>
                <h1 className='CardInCart__title'>{title}</h1>
                <h2 className='CardInCart__description'>{description}</h2>
                <h2 className='CardInCart__price'>{price}$</h2>
            </div>
            <span>
                <img className='CardInCart__delete' onClick={() => deleteGame(id)} src={bin} alt="" />
            </span> 
        </div>
       
    </div>
  )
}

export default CardInCart