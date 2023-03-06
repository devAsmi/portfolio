import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="d-flex justify-content-center align-items-center w-100">
          <Navbar.Text>© Asmita Pokhrel 2023</Navbar.Text>

          <div className="m-4">
            <a href="https://github.com/devAsmi" target="_blank">
              <Github size={32} fill={"black"} />
            </a>
          </div>

          <div className="m-4">
            <a
              href="https://www.linkedin.com/in/asmita-pokhrel-720a53262/"
              target="_blank"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
