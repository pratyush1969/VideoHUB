import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom'
import Trailer from './trailer';
import "../styles/moviedetailscard.css"
const Moviedetail = () => {

  const location = useLocation()
  console.log(location)
  return (
    <div className='destails-constainer'>
      <div className="left">
        <img src={`https://image.tmdb.org/t/p/original/${location.state.movie?.poster_path}`} alt="" />
      </div>
      <div className="right">
        <h3>Title :-{location.state.movie.title} </h3>
        <p> Overview:- {location.state.movie?.overview}</p>
        <h4>Release date:- {location.state.movie?.release_date}</h4>
        <button><Trailer location={location}/></button>
      </div>
    </div>



  )
}

export default Moviedetail

