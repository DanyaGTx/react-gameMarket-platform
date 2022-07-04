import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../auth/base';
import { deleteItemFromCart, setItemsInCart } from '../../redux/cart/reducer';
import './AddAndDeleteButton.css'
const AddAndDeleteButton = ({ game, openLogin }) => {

    const dispatch = useDispatch();

    const currentUser = useAuth(); //информация о пользователе (залогинен или нет)

    const items = useSelector(state => state.cart.itemsInCart);

    const isItemsInCart = items.some(item => item.id === game.id);

    const gamesInLibrary = useSelector(state => state.library.gamesInLibrary)

    const isGameInLibrary = gamesInLibrary.some(item => item.id === game.id)



    const addToCartAndDelete = (e) => {
        e.stopPropagation();
        if (currentUser) { //если залогинены
            if (isItemsInCart) {
                dispatch(deleteItemFromCart(game.id))
            }
            else {
                dispatch(setItemsInCart(game))
            }
        }
        else {
            openLogin();
        }
    }


    return (
        <div>
            {isGameInLibrary && currentUser  ? <h3 className='inLibrary-title'>In Library</h3> : <button onClick={addToCartAndDelete} className='game-card__button'>{isItemsInCart && currentUser ? 'Delete' : 'Add to Cart'}</button>}
        </div>

    )
}

export default AddAndDeleteButton