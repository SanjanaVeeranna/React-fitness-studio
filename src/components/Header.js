import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
            <header>
            <Navbar collapseOnSelect expand="lg" style={{background:'#cc3d00'}}>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
          <Nav.Link className='color-sec py-1'>HOME</Nav.Link>
          <Nav.Link className='color-sec py-1'>ABOUT</Nav.Link>
          <Nav.Link className='color-sec py-1'>CHALLENGES</Nav.Link>
          <Nav.Link className='color-sec py-1'> BENEFITS</Nav.Link>
          <Nav.Link className='color-sec py-1'>GALLERY</Nav.Link>
          <Nav.Link className='color-sec py-1'>CONTACT</Nav.Link>
          </Nav>
          <Nav style={{color:'white'}}>  
            <Button variant="outline-danger" className='my-2 fw-semibold' style={{ color: 'white', borderColor: 'white' }}>LOG IN</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
        </div>
    )
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <div className="nav-main-container">
//         <p>FITNESS STUDIO</p>
//       <div className="nav-links-container">
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/challenges">Challenges</Link>
//         <Link to="/benefits">Benefits</Link>
//         <Link to="/gallery">Gallery</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Header;
