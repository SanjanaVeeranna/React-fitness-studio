import '../../Styles/AboutFit.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';

function Section2() {

  return (
    <>
  
<div id='about-section' className="d-flex">

<section className='py-5 my-4 flex-grow-1' style={{ backgroundColor: 'white' }}>
    <Container>
      <div className="d-flex justify-content-end">
        <CardGroup>
        <Card className='m-3 border-0'>
          <Card.Img
            variant="top"
            src="https://media.self.com/photos/5c10255b2f04d8625a2fbb64/master/pass/women-with-dumbbells.jpg"
            className='card-img'
            style={{ width: '100%', height: '120%', border: '2px solid #213343'}}
          />
        </Card>
        </CardGroup>
      </div>
    </Container>
  </section>

  <section className='py-5 my-4 flex-grow-1' style={{ backgroundColor: 'white'}}>
    <Container>
      <div>
      <hr style={{ width: '100%', borderBottom: '4px solid #cc3d00', margin: '5px 0' }} />
        <h1 style={{ textAlign: 'center', color: '#213343', fontSize: '3.5em', paddingTop: '25px',paddingBottom: '25px'}} className="sec-2-font fw-boldS">OUR STORY</h1>
        <h2 style={{ textAlign: 'center', color: 'black'}} className="sec-2-font">“This is how we made It”</h2>
        <p style={{ textAlign: 'center', color: 'black' }} className="sec-2-font-p pt-3">A studio is a unique training space where instructors focus all their expertise on you and your alignment, not on their own personal workout. During group classes and private sessions, studio instructors spend their time monitoring what you are doing and how you are doing it.
        A studio is a unique training space where instructors focus all their expertise on you and your alignment, not on their own personal workout. During group classes and private sessions, studio instructors spend their time monitoring what you are doing and how you are doing it. A studio is a unique training space where instructors focus all their expertise on you and your alignment, not on their own personal workout. During group classes and private sessions, studio instructors spend their time monitoring what you are doing and how you are doing it</p>
      </div>
      <hr style={{ width: '100%', borderBottom: '4px solid #213343', margin: '5px 0' }} />
    </Container>
  </section>

</div>
  </>
  )
}

export default Section2;