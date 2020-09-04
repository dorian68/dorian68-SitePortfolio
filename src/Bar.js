import { React } from 'react';
import logo from './logo.svg';
import { Navbar,Nav} from 'react-bootstrap';

export default function Bar() {
    return (
        <Navbar className="NavBar" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Dorian L</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#features">Projets</Nav.Link>
              </Nav>
          </Navbar>
    );
};