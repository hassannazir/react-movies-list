import React, { useState, useContext } from 'react'
function Movieform({ movieList, setMovieList, filterList, setFilterList }) {
  const [movie, setMovie] = useState({
    name: '',
    rating: 0,
    duration: 0,
  })
  const [error, setError] = useState({ status: false, message: '' });

  const handleSubmit = event => {
    event.preventDefault();

    if (!movie.name || !movie.rating || !movie.duration) {
      setError({ status: true, message: 'Please Fill all the fields.' })
      return;
    }

    if (movie.rating < 1 || movie.rating > 100) {
      setError({ status: true, message: 'Please Enter between 1 and 100.' })
      return;
    }

    if (movie.duration.endsWith("m")) {
      let durationInHrs = movie.duration.slice(0, movie.duration.length - 1)
      setMovie({ ...movie, duration: durationInHrs / 60 })
    }
    else if (!movie.duration.endsWith("h")) {
      setError({ status: true, message: 'Please specify time in hours or minutes (e.g. 2.5h or 150m)' })
      return;
    }

    setMovieList([...movieList, movie])
    setFilterList([...filterList, movie])
  };

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange={(event) => { setMovie({ ...movie, name: event.target.value }); setError({ status: false }) }}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={(event) => { setMovie({ ...movie, rating: event.target.value }); setError({ status: false }) }}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={(event) => { setMovie({ ...movie, duration: event.target.value }); setError({ status: false }) }}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error.status ? <div
            className='alert error mb-30'
            data-testid='alert'
          >
            {/* Please specify time in hours or minutes (e.g. 2.5h or 150m) */}
            {error.message}
          </div>
            : ''}
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
        </form>
      </div >
    </section >
  )
}

export default Movieform
