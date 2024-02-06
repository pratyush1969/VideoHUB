import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/movie.css"
const TV = () => {

    const [tvdetails, settvdetails] = useState([])
    const gettvs = () => {
        try {
            fetch(`https://api.themoviedb.org/3/discover/tv?api_key=6dd7cdd83d25b83581564423ff0c4225`)
                .then(res => res.json())
                .then(data => settvdetails(data.results))
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        gettvs()
    }, [])
    return (
        <div className='moviedirection'>
            {
                tvdetails.map((tv, i) => {
                    return (

                        <Card style={{ width: '18rem',margin:"20px" }} key={i}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} />
                            <Card.Body>
                                <Card.Title>Title:- {tv.original_title}</Card.Title>
                                <Card.Text>
                                    Release:- {tv.release_date}
                                </Card.Text>
                                <Card.Text>
                                    Rating:- {tv.vote_average}
                                </Card.Text>
                                <Link to="/tvdetails" state={{tv:tv}}>
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

export default TV