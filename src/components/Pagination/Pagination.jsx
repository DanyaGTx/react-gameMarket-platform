import React from 'react'
import './Pagination.css'
const Pagination = ({currentPage,paginate,gamesPerPage,totalGames}) => {
  const pageNumbers = [];
  for(let i = 1; i<= Math.ceil(totalGames / gamesPerPage);i++){
    pageNumbers.push(i);
  }
  return (
    <div>
        <ul className='pagination'>
            {pageNumbers.map((page,id) => <li key={id} onClick={() => paginate(page)} className={page === currentPage ? 'page__number active-page' : 'page__number'}>{page}</li>)} 
        </ul>
    </div>
  )
}

export default Pagination