import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import '../Styles/Header.css';

function Header() {

const scrollToAboutSection = (secId) => {
  const section = document.getElementById(secId);
  const scrollPosition = section.offsetTop;

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
};

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" style={{ background: '#cc3d00' }}>
        <Container>
          <Navbar.Brand>
            <h1 style={{ textAlign: 'left', color: 'white', fontSize: '2.5em', paddingTop: '5px', paddingBottom: '5px'}} className="sec-2-font fw-boldS">BASE-FIT</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" style={{cursor: 'pointer'}}>
              <div className='color-sec py-1'>HOME</div>
              <div onClick={()=>{
                scrollToAboutSection('about')
              }} className='color-sec py-1'>ABOUT</div>
              <div onClick={()=>{
                scrollToAboutSection('challenges')
              }} className='color-sec py-1'>CHALLENGES</div>
              <div onClick={()=>{
                scrollToAboutSection('benefits')
              }} className='color-sec py-1'>BENEFITS</div>
              <div onClick={()=>{
                scrollToAboutSection('gallery')
              }} className='color-sec py-1'>GALLERY</div>
              <div onClick={()=>{
                scrollToAboutSection('contact')
              }} className='color-sec py-1'>CONTACT</div>
            </Nav>
            <Nav style={{ color: 'white' }}>
              <Button variant="outline-danger" className='my-2 fw-semibold' style={{ color: 'white', borderColor: 'white' }}>LOG IN</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
 