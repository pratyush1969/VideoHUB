import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/movie.css"
const Movie = () => {

    const [movies, setmovies] = useState([])
    const getmovies = () => {
        try {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6dd7cdd83d25b83581564423ff0c4225`)
                .then(res => res.json())
                .then(data => setmovies(data.results))
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getmovies()
    }, [])
    return (
        <div className='moviedirection'>
            {
                movies.map((movie, i) => {
                    return (

                        <Card style={{ width: '18rem',margin:"20px" }} key={i}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                            <Card.Body>
                                <Card.Title>Title:- {movie.original_title}</Card.Title>
                                <Card.Text>
                                    Release:- {movie.release_date}
                                </Card.Text>
                                <Card.Text>
                                    Rating:- {movie.vote_average}
                                </Card.Text>
                                <Link to="/moviedetail" state={{movie:movie}}>
                                    <Button variant="primary">See Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>


                    )
                })
            }
        </div>
    )
}

export default Movie