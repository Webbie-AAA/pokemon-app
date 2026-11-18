import { Link, NavLink, Outlet} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./App.css";


export default function NavBar(){
    return(
        <>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary my-navbar">
                <Container>
                <Navbar.Brand as={NavLink} className="big" to='/'> Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="dropdown"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='./pick-gender'>Stage 1: Pick A Gender</Nav.Link>
                        <Nav.Link as={NavLink} to='./pick-species'>Stage 2: Pick A Species</Nav.Link>
                        <Nav.Link as={NavLink} to='./variety-loading'>Stage 3: Variety Loading</Nav.Link>
                        <Nav.Link as={NavLink} to='./your-pokemon-is'>Stage 4: Pokemon Chosen!</Nav.Link>
                        <Nav.Link as={NavLink} to='./pokemon-stats'>stage 5: Chosen Pokemon Stats</Nav.Link>
                        <Nav.Link as={NavLink} to='./pokemon-collection'>Pokemon Collection</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact-us'>Contact Us</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse> 
                    
                    
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}