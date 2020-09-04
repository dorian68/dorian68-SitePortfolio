import React from 'react';
import logo from './logo.svg';
import About from './About';
import Project1 from './Project1';
import Projects from './Projects';
import Home from './Home';
import Hobbies from './Hobbies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Col,Row} from 'react-bootstrap';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
  
function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <a className="App-link" href="https://reactjs.org" target="_blank"rel="noopener noreferrer"/>
      </header>
      <body>
      <Router basename={process.env.PUBLIC_URL}>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fluid>
            <Navbar.Brand href="/Home">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                Dorian LABRY</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                 <NavDropdown title="Projects" id="nav-dropdown">
                  <NavDropdown.Item href="#Project1">Black and Scholes Pricer</NavDropdown.Item>
                  <NavDropdown.Item disabled="true">Python: the commercial traveler (Incoming)</NavDropdown.Item>
                  <NavDropdown.Item disabled="true">Machine Learning: Logistic regression (Incoming)</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item disabled="true" href="#Projects">See all</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Hobbies">Hobbies</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
        <Switch>
          <Route path="/About" exact component={About}  />
          <Route path="/Hobbies" exact component={Hobbies}  />
          <Route path="/Project1" exact component={Project1} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </body>
    <footer>
      <Container className="footer" fluid>
        <Row>
          <Col sm={9}>
             <p style={{marginLeft:"15%",marginTop:"5%",textAlign:"Left"}}>
              <tr><h4>See more</h4></tr>
              <tr>About</tr>
              <tr>Projects</tr>
              <tr>Hobbies</tr>
              <tr>Check out my:</tr>
              <tr>
                <li>Resume</li>
                <li>Projects page</li>
              </tr>
            </p>
           </Col>
          <Col sm={3}>
            <p style={{marginTop:"90%",marginBottom:"10%",fontSize:"80%"}}>© 2020 Proudly created by Dorian LABRY</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}
 
export default App;
