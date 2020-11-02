import React from 'react'
import './Hobbies.css'
import img1 from './images/Atlantic_Caraibes.jpg'
import img2 from './images/liberty_statue.jpg'
import img3 from './images/times_squares.jpg'
import { Container,Row,Col } from 'react-bootstrap'
 
export default function Hobbies() {
    return (
        <Container className="body">
            <p>Throughout my few travels, I have found myself an interest in photography.
            Here, you will find a few photography of mine taken with my phone \n</p> 

            <Row style={{marginTop:"10%",marginBottom:"10%"}}>
                <Col lg={6}>
                    <p>No need of presentation, here we have the freedom statue with the Manhattan skyline at the back.</p>
                </Col>
                <Col lg={6}>
                    <img src={img2} height="100%" width="100%"/>
                </Col>
            </Row>
            <Row style={{marginBottom:"10%"}}>
                <Col lg={6}>
                    <img src={img3} height="100%" width="100%"/>
                </Col>
                <Col lg={6}>
                    <p>As crowded as it is illuminated, here is times square. illuminated in daylight as well as at night... should we still wonder why New York is nicknamed "the city that never sleep" ? </p>
                </Col>
            </Row>
            <Row >
                <Col lg={6}>
                    <p>Straight from my window in the plane and somewhere above the the caribbean. I had to capture these shades of blue.
                        No photoshop involved I swear !
                    </p>
                </Col>
                <Col lg={6}>
                    <img src={img1} height="100%" width="100%"/>
                </Col>
            </Row>  
        </Container>
    )
}

 