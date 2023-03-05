import React, { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container fluid>
      <Row>
        <Header handlePageChange={handlePageChange} />
      </Row>
      <Row>{renderPage()}</Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
