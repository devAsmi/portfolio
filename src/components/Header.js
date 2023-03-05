import React from "react";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <header className="Navbar">
      <Navigation handlePageChange={props.handlePageChange} />
    </header>
  );
}
