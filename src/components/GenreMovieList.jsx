import React from 'react'
import GenresList from '../Constants/GenresList'
import MovieList from './MovieList'
const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<4&&(
            
                <div className='p-8 px-8 md:px-16'>
                    <h2 className='text-white text-[20px] font-bold '>{item.name}</h2>
                    <MovieList genreid={item.id}/>         
                </div>

        ))}

    </div>
  )
}

export default GenreMovieList