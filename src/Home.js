import React from 'react'
import mini from './images/mini2.jpg';
import me from './images/PHOTO_PRO.jpg';
import './Home.css';
import resume from './Docs/Resume-LABRY last version.pdf';
import { Container,Row,Col,Jumbotron } from 'react-bootstrap';

const SummaryText = "Currently listening to the market following a 12 month VIE in New York City at\n" +
                    "Societe Generale Americas.\n" +
                    "I graduated from an engineering school in digital professions with a\n" +
                    "emphasis on financial engineering in financial market\n" ;


export default function Home() {
    return (
      <Container>
        
        <Jumbotron style={{marginTop:"3%"}} >
        <Container className="justify-content-md-center">
          <Row>
          <Col sm={8}>
            <h1>Welcome to my Web Page !</h1>
            <p>With extensive experience on trading floors of leading French banks, I’ve built expertise in risk management, quantitative modeling, and performance optimization. I hold an engineering degree from ESILV, known for its excellence in financial engineering, and an Executive Master’s from Université Paris-Dauphine and ENSAE Paris, two prestigious institutions in economics and finance. I now help organizations optimize financial performance and manage risks in an ever-changing environment.</p>
            <a>This website aims to</a>
            <li>Provide more details about my background and my experiences</li>
            <li>Present my skills set throughout projects </li>
            <li>
                For more, check out my <a href={resume}>resume</a>
            </li>
          </Col>
          <Col className="HomeImage" sm={4}>
            <img src= {mini} width="100%"/>
          </Col>
          </Row>
        </Container>
      </Jumbotron> 
      <Container className="cont2">
      <Row className="square">
      <Col sm={4}>
        <img className="image-border" src={me} width="80%"></img>
      </Col>
      <Col className="square2" sm={4}>
        <h1 style={{fontSize:'100px'}}>Hello,</h1>
        <h4>I am available for work.</h4>
        <p>{SummaryText}.</p>
      </Col>
      <Col className="square2" sm={4}>
      <p>
          <tr><a href="">Available for:</a></tr>
          <tr>Market Risk roles</tr>
          <tr>Python developper roles</tr>
          <tr>Quantitative developper roles</tr>
          <tr>Consulting</tr>
        </p>
        <p>
          <tr><a href="">Website:</a></tr>
          <tr><a href="https://dorianlabry.fr/">dorianlabry.fr</a></tr>
        </p>
        <p>
          <tr><a href="">Cell:</a></tr>
          <tr>0695 74 77 47</tr>
        </p>
        <p>
          <tr><a href="">Email:</a></tr>
          <tr>labrydorian.mpsi@hotmail.fr</tr>
        </p>
      </Col>
      </Row>
    </Container>
    </Container>
    )
}
