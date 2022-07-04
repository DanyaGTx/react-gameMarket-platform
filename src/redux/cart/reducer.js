import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsInCart: []
    },
    reducers: {
        setItemsInCart: (state,action) =>{
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state,action) =>{
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload) //удалем игру , передавая id в payload
        },
        clearCart: (state) =>{
            state.itemsInCart = [];
        }

    }
})
export const {setItemsInCart,deleteItemFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;