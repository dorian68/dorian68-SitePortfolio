import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { BlockMath, InlineMath } from 'react-katex';
import crmtrvl from './images/crm.png';
{/*https://informatique-python.readthedocs.io/fr/latest/Annales/exam_1501.html#heuristique-opt-2*/}
export default function Project4() {
    return (
        <Container>
            <Jumbotron style={{marginTop:"3%"}} >
                <Container>
                    <h1>Python: The commercial traveler </h1>
                    <Row>

                    </Row>
                    <Row>
                    <Col>                   
                        <p>This Articles is still in construction but you can already look at my work <a href="https://github.com/dorian68/Commercial-Traveler">here</a> </p>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <img src={crmtrvl} style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
                    </Col>
                    </Row>
                </Container>
                
            </Jumbotron>
            <Jumbotron>
                <h2>What is "the commecial traveler" problem </h2>
                <p>The commercial traveler is a famous algorithmic and optimization problem.
                Given a list of city, the goal is to find the shortest path that runs through all the specified city ( only one time each ) and finishes at the first city.
                The complexity of this problem resides in the fact that there is no algorithm that calculate the exact solution in proper time.
                </p>
                <h2>My work</h2>
                <p>In this article, I will present you my implementation of this famous problem.
                    I choose python to write my code for its flexibility. 
                </p>
            </Jumbotron>
        </Container>
    )
}