import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';
import logo from '../images/logo.png'; 
const Header = () => {
    
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
        <Container>     
            <Navbar.Brand href="#home">
            <a href="#">
                <img src={logo} style={{width:140, marginTop: -7}} />
            </a>
            </Navbar.Brand>          
            <Navbar.Toggle aria-controls='responsive-navbar-nav'> 
                <a class="navbar-toggler collapsed border-0" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            
                    <span className='line'> </span>
                    <span className='line'> </span>
                    <span className='line'> </span>
                </a>
            </Navbar.Toggle> 
            <Navbar.Collapse id="responsive-navbar-nav" className='nav-collapse'>
            <Nav className='own-nav'>
            <Nav.Link className="navbar-button" href="#all-tyres">Show All Tyres</Nav.Link>
            <Nav.Link className="navbar-button" href="#dealer">Find a Dealer</Nav.Link>
            <Nav.Link className="navbar-button" href="#guides">Guides & Videos</Nav.Link>
            <Nav.Link className="navbar-button" href="#go-with">Go with</Nav.Link>
            <Nav.Link className="navbar-button" href="#service">Service & Help</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
  </Navbar>
 
    );
};

export default Header;
