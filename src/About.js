import React from 'react';
import './About.css';
import { Card,CardDeck,CardGroup } from 'react-bootstrap';
import me from './images/me2.png';
import bmc_certificate from './Docs/BMC_certificate.pdf';
import python_soloL_certificate from './Docs/Solo_learn_Python.pdf';
import ML_soloL_certificate  from './Docs/Solo_learn_ML.pdf';
import { Container,Accordion,Button,Row,Col } from 'react-bootstrap';

const SummaryText = "Currently listening to the market following a 12 month VIE in New York City at\n" +
                    "Societe Generale Americas.\n" +
                    "I graduated from an engineering school in digital professions with a\n" +
                    "emphasis on financial engineering in financial market\n" ;

const EducationText = "ECOLE SUPERIEURE D’INGENIEURS LEONARD DE VINCI (ESILV)\n" +
                    "MSc in Financial Engineering – specialized in financial market\n" +
                    "Relevant coursework: Advanced Fixed Income with Bloomberg, Liquidity Risk, Stochastic calculus, Local\n" +
                    "volatility and Dupire formula, machine learning (linear regression, principal components analysis, …), data\n" +
                    "structure management (SQL) and data structure algorithms.\n" +
                    "Project:Creation of a trading platform using VBA,Calibration of the SABR model with C# and WPF, options\n" +     
                    "pricing (B&S, binomial model)\n" ;

const ExperienceText1 = "SG AmericasSept 18-Present Market Risk and Trading Analyst –  New York, New York\n" +
                    "Production and certification of consolidated metrics on FIC perimeter - Full time position\n" ;


const ExperienceText2 = "STARTUP CREATION - FAS TEACH Paris, France\n" +
                    "(6 months) Fasteach is mobile application serving as a support for communication and organization between\n" +
                    "Teachers and students\n" ;


const ExperienceText3 = "VEOLIARESEARCH AND INOVATION (VERI) Courbevoie, France\n" +
                    "(7 months) Veolia has developed a treadmill to sort incoming waste streams.\n" +
                    "Our goal was to evaluate the feasibility of waste sorting by image processing\n" ;


const SkillsText = "English TOEIC 805, French (Mother tong)\n" +
            "• C++, C#, VBA Excel, Python\n" +
            "• Bloomberg BMC certification (Bloomberg Market Concept), Reuters\n" ;

const ColWidth = 5;
const Col2Width = 3;
const Col2WidthOffset = 4;


export default function About() {
    return (
<Container style={{marginBottom:"10%", marginLeft:"10%", marginRight:"auto", width:"80%"}}>   
            {/* <Row>
            <Container className="cont">
                <Row className="">
                    <Col lg={{span: 4,offset:0}} style={{marginTop:"20px"}}>
                        <p>
                            <h1>Dorian LABRY</h1>
                            <tr>Résidence les Anarcadiers Bat N porte 31 Petit-Paris Basse-Terre</tr>
                        </p>
                        <p>
                            <tr><a href="">Email: </a>labrydorian.mpsi@hotmail.fr</tr>
                            <tr><a href="">Phone: </a>0695 74 77 47</tr>
                        </p>
                    </Col>
                    <Col lg={{span: 3,offset:4}} style={{marginRight:"0px"}}>
                        <img src={me} style={{width:"auto",height:"200px%",marginTop:"30px",marginBottom:"30px"}}></img>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row>
            <Col sm={2}>
            <Container className="cardlist" >
                <Row className="title"><Col>Technical Skills</Col></Row>
                <li>English TOEIC 805, French (Mother tong)</li>
                <li>C++, C#, VBA Excel, Python</li>
                <li>Bloomberg BMC certification (Bloomberg Market Concept), Reuters</li>  
            </Container>  
            </Col>
            <Col  sm={ColWidth + 5}>
            <Container className="cardlist" >
    <Row className="title">Education</Row>

         <p>ECOLE SUPERIEURE D’INGENIEURS LEONARD DE VINCI (ESILV)</p>
         <p>MSc in Financial Engineering – specialized in financial market</p>
         <p>Relevant coursework: Advanced Fixed Income with Bloomberg, Liquidity Risk, Stochastic calculus, Local
         volatility and Dupire formula, machine learning (linear regression, principal components analysis, …), data
         structure management (SQL) and data structure algorithms.</p>

         <p>Project: Creation of a trading platform using VBA,Calibration of the SABR model with C# and WPF, options     
         pricing (Black and Scholes, binomial model)</p>


    <Row className="title"><Col sm={ColWidth}>SG Americas</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset }}>New York, New York</Col></Row>
             <Row><Col sm={ColWidth}>Market Risk and Trading Analyst</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset}}>Sept 18-Sept 19</Col></Row>
             <p><li>Production/Validation of daily STT, SVAR, VAR and Pnl on FICC</li>
                 <li>Maintenance/automating of existing VBA macro for Pnl/Risk purposes</li>
                 <li>Use of API with Python to automate and display report on new tools (Power BI/web application)</li>
                 <li>Management and automation of API query on Power BI through power query and M langague</li>
                 <li>Creation of new tools and new processes using python</li>
                 <li>Contact point between front office and other departments</li></p>

             <Row className="title"><Col sm={ColWidth}>FAS TEACH</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset }}>Paris, France</Col></Row>
             <Row><Col sm={{ span: ColWidth, offset: 0 }}>STARTUP CREATION</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset }}>(6 months)</Col></Row>
             <Row>Fasteach is mobile application serving as a support for communication and organization between Teachers and students</Row>
             <p><li>Method of design thinking</li>
                 <li>Business model Canvas</li>
                 <li>interacting with potential clients, understanding their needs and receiving feedbacks</li></p>

             <Row className="title"><Col sm={ColWidth}>VEOLIA RESEARCH AND INOVATION</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset }}>Courbevoie, France</Col></Row>
             <Row><Col sm={ColWidth}>Innovation Project</Col><Col xs={{ span: Col2Width, offset: Col2WidthOffset }}>(7 months)</Col></Row>
             <p><li>Project manager of a team of 4 people, managed meeting, assigned missions</li>
                 <li>Implemented a pre-trained convolutional neural network for image processing</li>
                 <li>Using C++ and python (libraryCaffe, implement convolutional neural network on C++)</li>
                 <li>Analyzed the algorithm’s performance on confidential data provided by Veolia (~100 images)</li></p>              
    </Container>
            </Col>
        </Row>
    <br></br> */}

        <Row style={{marginTop:"3%"}}>
        <Col lg={9}>
        <h2>Introduction</h2>
        <p>Hello I am Dorian, I have a master degree from <a href="https://www.esilv.fr/">ESILV</a> in financial engineering and I choosed to specialize in financial market.
        ESILV financial engineering diploma focuses on training qualified individual on digital profession through computer science and mathematics courses.
        </p>
        <p>
        I have experiences :
        <li>as an intern, monitoring the real-times risk and exposures of the fixed income business line of societe general providing real-time report and end of day pnl to the traders and the top managment.</li>
        <li>as full time employee in a 12 months fixed term contract, producing the official risk metrics ( VaR, SVaR and stress test) on the amer and latam perimeters of societe generale.</li>
        </p>
        <p>
        I have programming skills in both python and vba as I was during my previous experiences in charge of creating, deploying and maintaining risk and pnl reporting tools.
        </p>
        </Col>
        <Col lg={3} >
        <Row style={{backgroundColor:"rgb(52, 58, 64)",borderRadius:"15px",borderWidth:"1em",color:"white"}}>
        <Container>
        <h2>Contact</h2>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/dorian-labry-a29109103">Dorian LABRY</a></li>
        <li>Github: <a href="https://github.com/dorian68">dorian labry</a></li>
        <li>Hackerrank: <a href="https://www.hackerrank.com/labrydorian_mpsi">labrydorian_mpsi</a></li>
        <li>Kaggle: <a href="https://www.kaggle.com/dorianlabry">dorianlabry</a></li>
        </Container>
        </Row>
        <Row></Row>
        </Col>
        </Row>
        <h2>Certifications: </h2>
        <CardDeck>
         <Card>
            <Card.Header>Bloomberg market concept</Card.Header>
            <Card.Body>
                <blockquote>
                <p>
                    {' '}
                    Certificate from bloomberg platform covering: 
                    <li>Economic Indicators</li>
                    <li>Currencies</li>
                    <li>Fixed Income</li>
                    <li>Equities</li> {' '}
                </p>
                <footer className="blockquote-footer">
                    see the <a href={bmc_certificate}> certificate </a>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Solo learn: Python</Card.Header>
            <Card.Body>
                <blockquote>
                <p>
                    {' '}
                    Python certificate from Solo Learn which provides lessons on:
                    <li>Functions and modules</li> 
                    <li>Exceptions and files</li>
                    <li>Functional Programming</li>
                    <li>Object oriented programming in Python</li>
                    <li>Regular expressions</li>
                    <li>Pythonicness ans packaging</li>{' '}
                </p>
                <footer className="blockquote-footer">
                    see the <a href={python_soloL_certificate}> certificate </a>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Machine Learning</Card.Header>
            <Card.Body>
                <blockquote>
                <p>
                    {' '}
                    Machine learning certificate from solo which provides lessons on:
                    <li>Introduction to classification</li>
                    <li>Model evaluation</li> 
                    <li>Decision tree model</li>
                    <li>Random forest model</li>
                    <li>Neural networks</li>{' '}
                </p>
                <footer className="blockquote-footer">
                    see the <a href={ML_soloL_certificate}> certificate </a>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
        </CardDeck>
 </Container>
    )
}
