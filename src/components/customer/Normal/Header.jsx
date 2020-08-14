import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return(
    <Navbar fixed="top" className="boxShadow p10" style={{height: "70px"}}>
      <Navbar.Brand href="#home">AS Hotels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div  className="underline">
            <Nav.Link href="#home">Home</Nav.Link>
            <div class="slider"></div>
          </div>
          <div  className="underline">
            <Nav.Link href="#home">Offer</Nav.Link>
            <div class="slider"></div>
          </div>
        </Nav>
        <Nav>
          <div  className="underline">
            <Nav.Link href="/user/signin">Signin / Singup</Nav.Link>
            <div class="slider"></div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header