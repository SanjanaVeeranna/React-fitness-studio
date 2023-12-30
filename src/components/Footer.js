import { Container } from 'react-bootstrap';
import '../Styles/Footer.css';
import {Col, Form} from 'react-bootstrap';

function Footer() {
    return (
        <div className="py-5 col-md-12 col-xl-12 col-lg-12" style={{ background: '#213343', color: 'white'}}>
        <Container>
        
            
            <div className="container">
            <footer className="row justify-content-between">
                <div className="col-xl-4">
                    <div  className="">
                        <h2>QUICK MENU</h2>
                        <p>About</p>
                        <p>Challenges</p>
                        <p>Benefits</p>
                        <p>Gallery</p>
                        <p>Contact Us</p>
                        
                    </div>
                </div>
                <div className="col-xl-4">
                    <div  className=" bg3">
                        <h2>STAY TUNED</h2>
                        <p>Subscribe Now and Get Access to 
                            <br></br>Exclusive Workouts and Tips</p>

            <Col md={6} className="py-4">
                <Form.Group controlId="formFirstName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Email" />
                   
                </Form.Group>
            </Col>
            
                    </div>
                </div>
                <div className="col-xl-4">
                    <div  className=" bg2">
                        <h2>OPENING HOURS</h2>
                        <h6>Monday - Friday</h6>
                        <p>6:00 AM - 11:00 PM</p>
                        <h6>Saturday - Sunday</h6>
                        <p>10:00 AM - 06:00 PM</p>
                    </div>
                </div>
            </footer>
            </div>
        </Container>
        </div>
    )
}

export default Footer;