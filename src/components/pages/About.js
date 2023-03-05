import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + "/picture.jpg"}
            alt="personal"
            width={400}
            height={500}
          />
        </Col>
        <Col className="p-4">
          <p className="fs-4">
            Hi, my name is Asmita Pokhrel. I am a Full Stack Developer and I
            graduated from fullstack developers bootcamp from Georgia Institute
            of Technology.
          </p>
          <p className="fs-4">
            I like to learn new technologies and dance in my spare time.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
