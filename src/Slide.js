import React from 'react';
import img1 from './images/A.jpg';
import img2 from './images/B.jpeg';
import { Carousel,Container } from 'react-bootstrap';
 

export default function Slide() {
    return (
        <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src= {img1} alt="First slide" fluid/>
            <Carousel.Caption>
              <Container className="text"  >
               </Container>  
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" fluid/>
          <Carousel.Caption>
            <Container className="text"  >
             </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};