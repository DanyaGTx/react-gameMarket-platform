import React from 'react'
import './CardInCartPopUp.css'
import bin from '../../../img/bin.png'
const CardInCartPopUp = ({ id, deleteGame, image, title, price }) => {

    return (
        <div className='cardInCartPopUp'>
            <div className='cardInCartPopUp-image__block'>
                <img className='cardInCartPopUp-image' src={image} alt="" />
                <img onClick={() => deleteGame(id)} className='cardInCartPopUp-delete' src={bin} alt="" />
            </div>
            
            <div className='cardInCartPopUp-info__block'>
                <div className='cardInCartPopUp-info__text'>
                    <h2 className='cardInCartPopUp-info-title'>{title}</h2>
                    <h3 className='cardInCartPopUp-info-price'>{price}$</h3>
                </div>
               
            </div>

        </div>
    )
}

export default CardInCartPopUp