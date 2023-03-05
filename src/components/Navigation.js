import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Asmita Pokhrel</Navbar.Brand>
        <Nav defaultActiveKey="#home">
          <Nav.Link href="#home" onClick={() => props.handlePageChange("Home")}>
            About me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
          >
            Contact Me
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => props.handlePageChange("Resume")}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
