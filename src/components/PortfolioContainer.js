import React, { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Projects />;
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
