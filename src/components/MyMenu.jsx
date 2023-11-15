import React from 'react'
import logo from "../assets/logo.png";
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome,FaUser, FaBusinessTime,FaBriefcase,FaFile} from "react-icons/fa";

function MyMenu() {
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
              <FaHome style={{ marginBottom: "4px" }} />
              Home
            </Nav.Link>
            <Nav.Link href="#services">
                <FaUser style={{marginBottom:"4px"}}/>
                About
            </Nav.Link>
            <Nav.Link href="#Experience">
                <FaBusinessTime style={{marginBottom:"4px"}}/>
                Experience
            </Nav.Link>
            <Nav.Link href="#Project">
                <FaBriefcase style={{marginBottom:"4px"}} />
                Project
            </Nav.Link>
            <Nav.Link href="#Resume">
                <FaFile style={{marginBottom:"4px"}}/>
                Resume
            </Nav.Link>
          </Nav>
        </Navbar>
      );
}    

export default MyMenu