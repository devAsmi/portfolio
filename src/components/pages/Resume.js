import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
      <div className="m-4">
        <Button
          variant="outline-primary"
          href="https://drive.google.com/file/d/138dqKuASGnAKDb9qi6zi4KeAEkxzjRgI/view?usp=sharing"
          download="asmita_resume"
          target="_blank"
        >
          Download Resume
        </Button>
      </div>
      <div className="w-50 m-4">
        <p className="h4">Frontend Technologies</p>
        <ListGroup>
          <ListGroup.Item>HTML/CSS/JS</ListGroup.Item>
          <ListGroup.Item>jQuery</ListGroup.Item>
          <ListGroup.Item>Handlebars</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="w-50 m-4">
        <p className="h4">Backend Technologies</p>
        <ListGroup>
          <ListGroup.Item>NodeJS</ListGroup.Item>
          <ListGroup.Item>Express</ListGroup.Item>
          <ListGroup.Item>SQL Databases</ListGroup.Item>
          <ListGroup.Item>Sequelize ORM</ListGroup.Item>
          <ListGroup.Item>MongoDB</ListGroup.Item>
          <ListGroup.Item>Mongoose</ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
}
