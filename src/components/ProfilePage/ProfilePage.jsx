import React from 'react'
import { useAuth } from '../../auth/base';
import './ProfilePage.css'
import { useSelector } from 'react-redux/es/exports';
import user from '../../img/user.png'
const ProfilePage = () => {
    const currentUser = useAuth();
    const gamesInLibrary = useSelector(state => state.library.gamesInLibrary)
  return (
    <div className='container profile__page'>
      <img className='profile__page-image' src={user} alt="" />
      <div className='user__information'>
        <h1 className='user__login'>Your Login: {currentUser?.email}</h1>
        <h2 className='user__purchases'>All Purchases: {gamesInLibrary.length}</h2>
      </div>
      
    </div>
  )
}

export default ProfilePage