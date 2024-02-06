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
    <div className='moviedetails-card'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${location.state.movie?.poster_path}`} />
      <Card.Body>
        <Card.Title>Title:- {location.state.movie?.title}</Card.Title>
        <Card.Text>
         Overview:- {location.state.movie?.overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release date:- {location.state.movie?.release_date}</ListGroup.Item>
        <ListGroup.Item>Original Language:- {location.state.movie?.original_language}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item><Trailer location={location}/></ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>
  )
}

export default Moviedetail

