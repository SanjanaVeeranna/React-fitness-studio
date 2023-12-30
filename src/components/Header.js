import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../Styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate(); 

  const location = useLocation();
  const isHome = location.pathname === '/home';

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
      <Navbar collapseOnSelect expand="lg" style={{ background: '#213343' }}>
        <Container>
          <Navbar.Brand>
            <h1 style={{ textAlign: 'left', color: 'white', fontSize: '2.5em', paddingTop: '5px', paddingBottom: '5px'}} className="sec-2-font fw-boldS">BASE-FIT</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" style={{cursor: 'pointer'}}>
              <div onClick={()=>{
                navigate('/home');
              }} className='color-sec py-1'>HOME</div>
              <div onClick={()=>{
                isHome ? scrollToAboutSection('about') : navigate('/about');
              }} className='color-sec py-1'>ABOUT</div>
              <div onClick={()=>{
                isHome ? scrollToAboutSection('challenges') : navigate('/challenges');
              }} className='color-sec py-1'>CHALLENGES</div>
              <div onClick={()=>{
                isHome ? scrollToAboutSection('benefits') : navigate('/benefits');
              }} className='color-sec py-1'>BENEFITS</div>
              <div onClick={()=>{
                isHome ? scrollToAboutSection('gallery') : navigate('/gallery');
              }} className='color-sec py-1'>GALLERY</div>
              <div onClick={()=>{
                isHome ? scrollToAboutSection('contact') : navigate('/contact');
              }} className='color-sec py-1'>CONTACT</div>
            </Nav>
            <Nav style={{ color: 'white' }}>
              <div onClick={() => {navigate('/login')}} className='my-2 mx-1 border p-2 fw-semibold login-button'>LOG IN</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
 