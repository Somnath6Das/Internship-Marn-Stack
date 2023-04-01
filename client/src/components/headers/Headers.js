import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
  return (
    <div className="headers">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><i style={{fontSize: '15px'}} class="fa-solid fa-house-user"></i>&nbsp;<span>Home</span></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/register">Register</Nav.Link>         */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Headers;