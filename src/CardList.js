import React from "react";
import CardComp from "./CardComp";
import mini from './images/mini1.jpg'
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const projectList = [{
  name: 'Black and Scholes Pricer',
  description: '',
  image: 'Voluptate tempor qui cillum voluptate ut ea sint sunt.'
},
{
name:'Python: the commercial traveler (Incoming)',
description:'',
image:'Proident laboris eiusmod sunt culpa.'
},
{
  name:'Machine Learning: Logistic regression (Incoming)',
  description:'',
  image:'Sunt nulla voluptate eiusmod velit esse Lorem ad veniam.'
  }
]
export default function CardList() {
  
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ backgroundColor: "#white", padding: "2rem" }}>
      <Container>
        <Row>
          {Object.keys(projectList).map((num, i) => (
            <Col md={4} sm={6}>
              {/* {console.log(i)} */}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mini} />
                <Card.Body>
                <Card.Title>{projectList[i].name}</Card.Title>
                <Card.Text>
                    {projectList[i].description}
                </Card.Text>
                <Button variant="primary">Check it out</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
