import React from 'react'
import './CartPage.css'
import { useSelector, useDispatch } from 'react-redux';

import { clearCart, deleteItemFromCart } from '../../redux/cart/reducer';
import CardInCart from './CardInCart/CardInCart';
import { setGamesToLibrary } from '../../redux/library/reducer';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const items = useSelector(state => state.cart.itemsInCart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteGame = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  const addGamesToLibrary = () => {
    dispatch(setGamesToLibrary(items))
    dispatch(clearCart());
    alert('Now you can check your games in your library');
    navigate('/')
  }
  return (
    <div className='container cart__page'>
      {items.length > 0 ?
        <div className='all__purchases'>
          {items.map(item => <CardInCart key={item.id} id={item.id} description={item.description} deleteGame={deleteGame} image={item.image} title={item.title} price={item.price} />)}
          
          <div className='cart__page-submitPurchases'>
            <button className='submitPurchases__button' onClick={addGamesToLibrary} >Submit all purchases</button>
          </div>
        </div>

        : <h1 className='nothing__inCart'>Nothing in your cart :( </h1>
      }

    </div>
  )
}

export default CartPage