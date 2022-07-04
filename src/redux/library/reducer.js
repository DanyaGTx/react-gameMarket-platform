import { createSlice } from "@reduxjs/toolkit";

const libraryGamesSlice = createSlice({
    name: 'libraryGames',
    initialState: {
        gamesInLibrary: [],
    },
    reducers:{ 
        setGamesToLibrary: (state,action) =>{
            state.gamesInLibrary.push(...action.payload);
        },
    }
})
export const {setGamesToLibrary} = libraryGamesSlice.actions;
export default libraryGamesSlice.reducer;