//store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import gameReducer from './games/reducer';
import gamesInLibrary from './library/reducer'
export const store = configureStore({
    reducer:{
        cart : cartReducer,
        game: gameReducer,
        library: gamesInLibrary,
    } 
})