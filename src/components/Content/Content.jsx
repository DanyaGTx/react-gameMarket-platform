import React from 'react'
import Main from '../../components/Main/Main';
import {
    Routes,
    Route,
    Navigate,
    useNavigate
  } from "react-router-dom";
import { useAuth } from '../../auth/base';
import ProfilePage from '../ProfilePage/ProfilePage';
import CartPage from '../CartPage/CartPage';
import GameViewPage from '../GameViewPage/GameViewPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import Community from '../Community/Community';
import Support from '../Support/Support';
  
const Content = ({openModal,openLogin}) => {
  
  const currentUser = useAuth();

  return (
    <main>
        <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route  path='/' element={<Main openModal={openModal} openLogin={openLogin} />}/>
          <Route  path='/' element={<h1>Store</h1>}/>
          <Route  path='/community' element={<Community />}/>
          <Route  path='/support' element={<Support/>}/>
          <Route exact path="/game/:id" element={<GameViewPage openLogin={openLogin} />} />
          {/* Private Routes */}
          {currentUser && <Route  path='/library' element={<LibraryPage />} /> } 
          {currentUser && <Route  path='/profile' element={<ProfilePage />} /> } 
          {currentUser && <Route  path='/cart' element={<CartPage />} /> } 
         </Routes>
    </main>
  )
}

export default Content