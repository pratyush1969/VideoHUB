import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
const Navbarfinal = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container className='bg-secondary'>
                <Navbar.Brand href="#home">
                   Video<span>HUB</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       <Link className='navbar-links' to="/">Movies</Link>
                       <Link className='navbar-links' to="/tv">TV Shows</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarfinal