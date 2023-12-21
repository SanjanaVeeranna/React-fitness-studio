import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Section6 = () => {
  return (
    
    <Container className="pt-4 pb-4">
        <hr style={{ width: '100%', borderBottom: '4px solid white', margin: '5px 0' }} />
      <Row>
        <Col md={6}>
        <div className='pt-3 pb-5'>
                <h1 style={{textAlign:'center', color:'#cc3d00', fontSize: '3.5em'}} className="sec-2-font">GET IN TOUCH</h1> 
                <h2 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em'}} className="sec-2-font">Got Questions? Just Contact Us Below</h2>
            </div>
          <Form>
          <Row>
    
          <Col md={6} className="py-4">
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
          </Col>

          <Col md={6} className="py-4">
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="py-4">
            <Form.Group controlId="formFirstName">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
          </Col>

          <Col md={6} className="py-4">
            <Form.Group controlId="formLastName">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Col>
        </Row>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="outline-danger" className='my-2 fw-semibold'>SUMBIT</Button>{' '}
          </Form>
        </Col>

        <Col md={6} className="py-4">
          <img
            src="https://www.wildstone.in/cdn/shop/articles/top-gym-bag-essentials.jpg?v=1660042683"
            alt="Contact Us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section6;
