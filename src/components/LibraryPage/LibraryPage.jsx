import React from 'react';
import './LibraryPage.css';
import {useSelector} from 'react-redux';
import GameInLibrary from './GameInLibrary/GameInLibrary';

const LibraryPage = () => {
 const gamesInLibrary = useSelector(state => state.library.gamesInLibrary);

  return (
    <div className='container gamesInLibrary'>
      {gamesInLibrary.length > 0 ? gamesInLibrary.map(game => <GameInLibrary key={game.id} game={game} />) : <h1 className='noGames__title'>Your library is empty :(</h1>}
    </div>
  )
}

export default LibraryPage