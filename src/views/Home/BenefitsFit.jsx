import '../../Styles/Benefit.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import React from 'react'

function Section4() {
  return (
    <div>
      <section className='py-5 my-4'>
      <Container>
            <div>
            <h1 style={{ textAlign: 'center', color: '#cc3d00', fontSize: '3.5em' }} className="sec-2-font fw-boldS">BENEFITS OF WORKING OUT</h1>
            <h2 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em'}} className="sec-2-font">We provide quality Time. We care about your Fitness that's why we are here for you now and always.</h2>
            </div>
<Container>
  <section>
    <Card className='m-3 border-0'>
      <Card.Body>
        <Card.Title className='font-famali my-3' style={{color:'#cc3d00', fontSize: '1.5em'}}>Build Confidence</Card.Title>
        <Card.Text>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Card.Text>
      </Card.Body>
    </Card>
    <hr style={{ width: '100%', borderBottom: '4px solid #cc3d00', margin: '5px 0' }} />

    <Card className='m-3 border-0' >
      <Card.Body>
        <Card.Title className='font-famali my-3' style={{color:'#cc3d00', fontSize: '1.5em'}}>Increase Energy Levels</Card.Title>
        <Card.Text>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Card.Text>
      </Card.Body>
    </Card>
    <hr style={{ width: '100%', borderBottom: '4px solid #cc3d00', margin: '5px 0' }} />

    <Card className='m-3 border-0'>
      <Card.Body>
        <Card.Title className='font-famali my-3' style={{color:'#cc3d00', fontSize: '1.5em'}}>Enchance Physical Fitness</Card.Title>
        <Card.Text>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Card.Text>
      </Card.Body>
    </Card>
    <hr style={{ width: '100%', borderBottom: '4px solid #cc3d00', margin: '5px 0' }} />

    <Card className='m-3 border-0'>
      <Card.Body>
        <Card.Title className='font-famali my-3' style={{color:'#cc3d00', fontSize: '1.5em'}}>Increase Energy Levels</Card.Title>
        <Card.Text>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Card.Text>
      </Card.Body>
    </Card>
    <hr style={{ width: '100%', borderBottom: '4px solid #cc3d00', margin: '5px 0' }} />

  </section>
</Container>

      </Container>
      </section>
    </div>
  )
}

export default Section4
