import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container className="p-4">
      {/* <div className="d-flex justify-content-center">
        <p className="h2">About Me</p>
      </div> */}

      <div className="d-flex gap-4">
        <img
          src={process.env.PUBLIC_URL + "/IMG-0438.jpg"}
          alt="personal"
          width={400}
          height={500}
        />

        <div className="d-flex flex-column justify-content-center">
          <p className="h2">About Me</p>
          <hr />
          <p className="fs-4">
            Hi, my name is Asmita Pokhrel. I am a Full Stack Developer and I
            graduated from fullstack developers bootcamp from Georgia Institute
            of Technology.
          </p>
          <p className="fs-4">
            I like to learn new technologies and dance in my spare time.
          </p>
        </div>
      </div>
    </Container>
  );
}
