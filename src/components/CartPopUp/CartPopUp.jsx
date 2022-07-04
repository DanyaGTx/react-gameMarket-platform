import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cart from '../../img/cart.png'
import './CartPopUp.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import CardInCartPopUp from './CardInCartPopUp/CardInCartPopUp'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { deleteItemFromCart } from '../../redux/cart/reducer'

const CartPopUp = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteGame = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  const goCart = (event) => {
    event.preventDefault();
    setIsCartOpen(false);//закрытие корзины по перехожу на страницу заказа
    navigate('/cart');
  }



  const items = useSelector(state => state.cart.itemsInCart); //получение массива добавленных игр


  const totalPrice = items.reduce((acc, { price }) => acc += price, 0)
  return (
    <div className='cartPopUp__block'>
      <div onClick={() => setIsCartOpen(!isCartOpen)} className='cartPopUp__image-block'>
        <img className='cartPopUp__image' src={cart} alt="Cart" />
        {items.length > 0 && <span className='cartPopUp__image-amountProducts'>{items.length}</span>}
      </div>

      {isCartOpen &&
        <div className='cartPopUp__block-products'>
          {items.map((item) => <CardInCartPopUp key={item.id} deleteGame={deleteGame} id={item.id} image={item.image} title={item.title} price={item.price} />)}
          
          {items.length > 0 ?
            <div>
              <h2 className='cartPopUp__totalPrice'>Total Price: {totalPrice}$</h2>
              <h3 onClick={e => goCart(e)} className='cart__text cart__button'>To Cart</h3>
            </div> 
            : 
            <h1 className='cartPopUp__totalPrice'>Nothing in your cart</h1>
          }
          <span onClick={() => setIsCartOpen(false)} className='modal__close'>x</span>
        </div>
      }
    </div>
  )
}

export default CartPopUp