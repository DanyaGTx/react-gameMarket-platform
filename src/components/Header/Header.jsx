import React from 'react'
import './Header.css';
import { Link, Navigate,NavLink,Redirect, useNavigate } from 'react-router-dom'
import Logo from './Logo';
import {useAuth,logout} from '../../auth/base';
import ProfilePopUp from '../../components/ProfilePopUp/ProfilePopUp'
import CartPopUp from '../CartPopUp/CartPopUp';

const Header = ({openLogin,openRegister,setModalLogineOpen, setModalRegisterOpen }) => {

  const currentUser = useAuth(); //информация о пользователе (залогинен или нет)

  const handleLogout = () =>{
    logout();
  }
  return (
    <header className='header'>
      <div className='container header-container'>
        <Link to='/'><Logo /></Link>
        <ul className='header__menu-list'>
          <NavLink to='/'><li>STORE</li></NavLink>
          {currentUser &&  <NavLink to='/library'><li>LIBRARY</li></NavLink>}
          <NavLink to='/community'> <li>COMMUNITY</li></NavLink>
          <NavLink to='/support'><li>SUPPORT</li></NavLink>    
          {currentUser && <CartPopUp />} 
          {currentUser && <ProfilePopUp handleLogout={handleLogout} />} 
        </ul>
        {!currentUser &&
          <div className="registration__section">
            <button onClick={openLogin} className='form-button'>Login</button>
            <button onClick={openRegister} className='form-button'>Create account</button>
          </div>
        }
      </div>
    </header>
  )
}

export default Header