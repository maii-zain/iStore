import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../Styles/Header.css'; 

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#">
            <img
              src="iStoreImages/Gold and Black Luxury Jewelry Logo.png" 
              alt="Istore Logo"
              style={{
                width: '50px',
                height: '50px',
                marginRight: '10px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            Istore
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {['Home', 'Products', 'About Us', 'Contact Us'].map((item, index) => (
                <Nav.Link
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="nav-link-custom"
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
