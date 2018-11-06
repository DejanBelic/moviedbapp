import React from 'react'
import './MovieThumb.css';
import { Link } from 'react-router-dom';

const MovieThumb = ({image, movieId, movieName, clickable}) => {
  return (
    <div className='rmdb-moviethumb'>
        {     clickable ? 
            <Link to={{pathname: `/${movieId}`, movieName: `${movieName}`}}>
              <img src={image} alt='movieThumb' />
            </Link>
              : 
              <img src={image} alt='movieThumb' />
        }
      
    </div>
  )
}

export default MovieThumb;