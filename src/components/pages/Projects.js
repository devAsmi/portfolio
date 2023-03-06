import React from "react";
import { Card, Container } from "react-bootstrap";
import Project from "../Project";

const projects = [
  {
    name: "Binge Show Calculator",
    github: "https://github.com/camh915/Binge-Show-Calculator-p01",
    deployed: "https://camh915.github.io/Binge-Show-Calculator-p01/",
    image: "/assets/images/binge_calculator.png",
  },
  {
    name: "Take a Note",
    github: "https://github.com/devAsmi/take-a-note",
    deployed: "https://damp-beyond-85919.herokuapp.com/",
    image: "/assets/images/notetaker.png",
  },
  {
    name: "Password Generator",
    github: "https://github.com/devAsmi/random-password-generator",
    deployed: "https://devasmi.github.io/random-password-generator/",
    image: "/assets/images/passwordgenerator.png",
  },
  {
    name: "My-Medi",
    github: "https://github.com/devAsmi/my-medi",
    deployed: "https://my-medi.herokuapp.com/",
    image: "/assets/images/mymedi.png",
  },
  {
    name: "Tech Blogs",
    github: "https://github.com/devAsmi/tech-blogs",
    deployed: "https://tech-blog-1999.herokuapp.com/homepage",
    image: "/assets/images/techblogs.png",
  },
  {
    name: "Weather-Info",
    github: "https://github.com/devAsmi/Weather-Info",
    deployed: "https://devasmi.github.io/Weather-Info/",
    image: "/assets/images/weatherinfo.png",
  },
];

export default function Projects() {
  return (
    <Container>
      <p className="h2">Projects</p>
      <div className="d-flex gap-2 flex-wrap">
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              github={project.github}
              deployed={project.deployed}
              image={project.image}
            />
          );
        })}
      </div>
    </Container>
  );
}
