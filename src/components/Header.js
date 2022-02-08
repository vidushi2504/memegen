import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand style={{color: "white"}}>Meme Generator</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

