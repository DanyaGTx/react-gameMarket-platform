import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../img/profile.png'
import './ProfilePopUp.css'

const ProfilePopUp = ({handleLogout}) => {
  return (
    <div className='profilePopUp__block'>
        <img className='profile-ico' src={profile} alt="profile" />
        <div className='profilePopUp__block-content'>
           <Link to='/profile'><h3 className='profilePopUp__text'>My Profile</h3></Link>
            <h3 onClick={handleLogout} className='profilePopUp__text'>Logout</h3>
          
        </div>
   
    </div>
  )
}

export default ProfilePopUp