import React, { useEffect, useMemo, useState } from 'react'

import Card from '../Card/Card'
import SearchInput from '../SearchInput/SearchInput'
import GAMES from '../../gamesData'
import './Main.css'
import MySelect from '../MySelect/MySelect'
import {useSelector} from 'react-redux'
import Pagination from '../Pagination/Pagination'


const Main = ({ openModal, openLogin }) => {

 

  const [selectedSort, setSelectedSort] = useState('');

  const [search, setSearch] = useState('');

  const [currentPage,setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(6);

  const lastGameIndex = currentPage * gamesPerPage;
  const firstGameIndex = lastGameIndex - gamesPerPage;
  const currentGamePage = GAMES.slice(firstGameIndex,lastGameIndex) 
 



  const [games, setGames] = useState(currentGamePage);
  const onChangeSearch = (e) => {
    setSearch(e.currentTarget.value)

  }
  const sortedGames = useMemo(() => {
    return games;
  }, [games])


  const paginate = (pageNumber) =>{
    
    setCurrentPage(pageNumber);
   
  }

  useEffect(()=>{ //Сетаем игры на старницы только в том случае, если увидели переключение в страницах
    setGames(currentGamePage);
  },[currentPage])
  

  const sortGames = (sort) => {
    setSelectedSort(sort);
    if (sort === 'name') {
      setGames([...currentGamePage].sort((a, b) => a['title'].localeCompare(b['title'])))
    }
    else if (sort === 'price-up') {
      setGames([...currentGamePage].sort((a, b) => a['price'] - b['price']))
    }
    else if (sort === 'price-down') {
      setGames([...currentGamePage].sort((a, b) => b['price'] - a['price']))
    }
  }

// Поиск
  const sortedGamesAndSearchedGames = useMemo(() => {
    return sortedGames.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, sortedGames])//Вызываем фильтрацию, когда изменился поиск или изменился массив


  return (
    <main className='container'>
      <div className='games-search'>
        <SearchInput search={search} setSearch={setSearch} onChangeSearch={onChangeSearch} />
      </div>
      <div className='games-sort__select'>
        <MySelect value={selectedSort} sortGames={sortGames} defaultValue="Sort by" option={[
          { value: 'name', name: "By name" },
          { value: 'price-up', name: "Low Price" },
          { value: 'price-down', name: "High Price" },
        ]} />
      </div>
      <div className='game-cards'>
        {sortedGamesAndSearchedGames.length > 0 ? sortedGamesAndSearchedGames.map(game => <Card key={game.id} game={game} openModal={openModal} openLogin={openLogin} />) : <h1 className='nothing__cards'>Nothing to Find</h1>}
      </div>
      <div className='pagination__block'>
        <Pagination paginate={paginate} currentPage={currentPage}  gamesPerPage={gamesPerPage}  totalGames={GAMES.length} />
      </div>
    </main>
  )
}

export default Main