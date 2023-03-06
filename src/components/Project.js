import React from "react";
import { Card } from "react-bootstrap";

export default function Project({ name, github, deployed, image }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + image}
        height={"200"}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Link href={github} target="_blank">
          Github link
        </Card.Link>
        <Card.Link href={deployed} target="_blank">
          Deployed link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
