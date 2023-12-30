import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../Styles/BackgroundImage.css';
import Section2 from './AboutFit';
import Section3 from './ChallengeFit';
import Section4 from './BenefitsFit';
import Section5 from './GalleryFit';
import Section6 from './ContactFit';
import Footer from '../../components/Footer';
import React from 'react'
import { Container } from 'react-bootstrap';

function Section1() {

    return (
    <div>

            <section>
                
                <div className='image'>
                    <div>
                        <Container className='py-5'>
                            
                    <Card style={{ width: '30', marginTop:90, marginBottom:90, backgroundColor:'transparent' , border:0}}>
                        <Card.Body>
                            <Card.Title style={{color:'white'} } className="fonts">Base Fit- Functional Fitness Studio</Card.Title>
                            
                            <Card.Text style={{color:'white'}} className="fonts-p">
                            Where Fitness <br/>Becomes the Part of Your Lifestyle
                            </Card.Text>
                            <Button variant="outline-danger" className='my-2 fw-semibold pl-4'>BOOK NOW</Button>{' '}


                        </Card.Body>
                    </Card>
                    </Container> 
                    
                    </div>
                    
                </div>
            </section>

   
     <div id='about'><Section2 /></div>
     <div id='challenges'><Section3 /></div>
     <div id= 'benefits'><Section4 /></div>
     <div id= 'gallery'><Section5 /></div>
     <div id= 'contact'><Section6 /></div>
    
     </div>


    )
}

export default Section1
