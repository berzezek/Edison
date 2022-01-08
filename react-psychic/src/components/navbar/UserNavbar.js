import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function UserNavbar() {

    return(
        <Navbar bg='light' expand='lg'>
            <Container>
                <Link to={{ pathname: '/', fromDashboard: false }} className='text-decoration-none'><Navbar.Brand>Edison app</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                <Link to={{ pathname: '/psychic', fromDashboard: false }} className='btn btn-outline-secondary ms-1 text-decoration-none'>APP</Link>
                <Link to={{ pathname: '/psychicCredibility', fromDashboard: false }} className='btn btn-outline-secondary ms-1 text-decoration-none'>Psychic Credibility</Link>
                <Link to={{ pathname: '/usernumber', fromDashboard: false }} className='btn btn-outline-secondary ms-1 text-decoration-none'>User Statistics</Link>
                <Link to={{ pathname: '/signin', fromDashboard: false }} className='btn btn-outline-secondary ms-1 text-decoration-none'>Sign in</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}