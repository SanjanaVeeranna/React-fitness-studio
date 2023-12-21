import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';

const ImageCollage = () => {
  const containerStyle = {}

  return (
    <Container style={containerStyle}>

            <div>
                <h1 style={{textAlign:'center', color:'#cc3d00', fontSize: '3.5em'}} className="sec-2-font">GALLERY</h1> 
            </div>

      <CardGroup>
      <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/01.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/02.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/03.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/04.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/02.jpg" className='card-img'/>
          </Card>

        </CardGroup>

        <CardGroup>
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/07.jpg" className='card-img'/>
          </Card>
        
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/08.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/10.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/11.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/01.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/05.jpg" className='card-img'/>
          </Card>
        </CardGroup> 

        <CardGroup>
          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/12.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2020/08/73513541_1459257730919979_5667016481565573120_o-e1597084395378.jpg" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLc6v6GUldUdmMgLhpoVUsvXztMXcq_rOpXdmPrqEcbiB1Hasr0yxwycsEiofDH3iYGw&usqp=CAU" className='card-img'/>
          </Card>

          <Card className='m-3'>
          <Card.Img variant="top" src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Fitness%20Challenges/02.jpg" className='card-img'/>
          </Card>
        </CardGroup> 
     
    </Container>
  );
};

export default ImageCollage;
