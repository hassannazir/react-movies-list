import React, { useState, useEffect } from 'react'

function Search({ movieList, setMovieList, filterList, setSearchQuery }) {
  const searchHandle = (e) => {
    if (e.target.value.length >= 2) {
      setMovieList(filterList.filter((movie) => (movie.name.includes(e.target.value))))
    }

    if (!e.target.value.length) {
      setMovieList(filterList)
    }

    if (e.target.value.length <= 1)
      setSearchQuery(false)

    if (e.target.value.length >= 1 && !movieList.length)
      setSearchQuery(true)

  }


  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        onChange={searchHandle}
      />
    </section>
  )
}

export default Search
