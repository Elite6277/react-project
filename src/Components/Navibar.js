import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NaviBar() {
   return (
      <>
         <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Navbar.Brand>WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link>
                     <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/user">Users</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/about">About</Link>
                  </Nav.Link>
               </Nav>
               <Nav>
                  <Button variant="primary" className="me-2">
                     Log In
                  </Button>
                  <Button variant="primary">Sign out</Button>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </>
   );
}
