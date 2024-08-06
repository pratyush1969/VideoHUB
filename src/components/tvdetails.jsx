import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom'
import "../styles/moviedetailscard.css"
import Trailer1 from './trailer1';
const Tvdetails = () => {

  const location1 = useLocation()
  console.log(location1)
  return (
    <div className='destails-constainer'>
      <div className="left">
        <img src={`https://image.tmdb.org/t/p/original/${location1.state.tv?.poster_path}`} alt="" />
      </div>
      <div className="right">
        <h3>Title :-{location1.state.tv?.name} </h3>
        <p> Overview:- {location1.state.tv?.overview}</p>
        <h4>Release date:- {location1.state.tv?.first_air_date}</h4>
        <h5>Original Language:- {location1.state.tv?.original_language}</h5>
        <button><Trailer1 location1={location1}/></button>
      </div>
    </div>
  )
}

export default Tvdetails

