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
    <div className='moviedetails-card'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${location1.state.tv?.poster_path}`} />
      <Card.Body>
        <Card.Title>Title:- {location1.state.tv?.title}</Card.Title>
        <Card.Text>
         Overview:- {location1.state.tv?.overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release date:- {location1.state.tv?.release_date}</ListGroup.Item>
        <ListGroup.Item>Original Language:- {location1.state.tv?.original_language}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item><Trailer1 location1={location1}/></ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>
  )
}

export default Tvdetails

