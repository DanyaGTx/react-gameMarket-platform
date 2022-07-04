import React from 'react'
import logo from '../../img/logo.png'
const Logo = () => {
  return (
    <div className='header__logo'>
            <img className='header__logo-img' src={logo} alt="" />
            <span className='header__logo-text'>Game <br/> Market</span>
          </div>
  )
}

export default Logo