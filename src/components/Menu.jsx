import React from 'react'
import logo from "../assets/logo.png";
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome,FaUser, FaBusinessTime,FaBriefcase,FaFile} from "react-icons/fa";

function Menu() {
  return (
    <Navbar >
      {/* Logo à gauche */}
      <Navbar.Brand href="#home">
        <img
          alt="Logo"
          src={logo}  
          
          height="120"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      {/* Menu à gauche */}
      <Nav className="mr-auto menu" variant="tabs">
        <Nav.Link href="#accueil">
          <FaHome />
          Home
        </Nav.Link>
        <Nav.Link href="#services">
            <FaUser/>
            About
        </Nav.Link>
        <Nav.Link href="#">
            <FaBusinessTime/>Experience
        </Nav.Link>
        <Nav.Link href="#Project">
            <FaBriefcase />
            Project
        </Nav.Link>
        <Nav.Link href="#Resume">
            <FaFile/>
            Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );

}

export default Menu