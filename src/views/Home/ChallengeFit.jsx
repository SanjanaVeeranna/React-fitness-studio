import '../../Styles/ChallengeFit.css';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';

const  Section3 = () => {
  const navigate = useNavigate();
  return (
    <div>
        <section>
        <div className='pt-3 pb-5'>
                <h1 style={{textAlign:'center', color:'#213343', fontSize: '3.5em'}} className="sec-2-font">CHALLENGE YOURSELF</h1>
        </div>
        <CardGroup className='mx-2'>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_be3f2b7431d748059fa9104b595c91ab~mv2.jpg/v1/fit/w_1000,h_800,al_c,q_90/file.webp" className=''/>
            <Card.Body className='p-2'>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Upper Body Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
              
            </div>
          </Card.Body>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_a89f49cbb3e446c59ac9c13b6517907b~mv2.jpg/v1/fit/w_1000,h_800,al_c,q_90/file.webp" className='213343'/>
            <Card.Body className='p-2 '>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Lower Body Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
            </div>
            </Card.Body>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_0f4c434b9b8c4a159c8a67c2307aea48~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp=" className=''/>
            <Card.Body className='p-2 '>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Movement Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
            </div>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_bf4cf6e89bbd4b0e8444a5da339af9b6~mv2.jpg/v1/fit/w_1000,h_800,al_c,q_90/file.webp" className=''/>
            <Card.Body className='p-2 '>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Cardio Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
            </div>
            </Card.Body>
          </Card>
        
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_25f64eb6dc7c40ed8e4fad42007d085e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp" className=''/>
            <Card.Body className='p-2 '>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Core-Abbs Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
            </div>
            </Card.Body>
          </Card>
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_d1c96dcd25aa4a62bdd2f907621a3ce0~mv2.jpg/v1/fit/w_1000,h_800,al_c,q_90/file.webp" className=''/>
            <Card.Body className='p-2 '>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className='fw-bold'>Warm-UP Challenge</Card.Title>
              <Button onClick={()=>{navigate('/upperBody')}} variant="outline-danger" className='fw-semibold pl-4'>JOIN NOW</Button>
            </div>
            </Card.Body>
          </Card>
          </CardGroup>

            <div className='image-bg'>
                <div className='over-color' style={{ background: '#213343' }}>
                    <Container>
                    <h1 className='h1 mb-0'>“WE ARE WHAT WE REPEATEDLY DO. EXCELLENCE THEN IS NOT AN ACT BUT A HABIT.”</h1>
                    </Container> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default Section3