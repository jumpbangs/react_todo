import React from "react";
import Container from "@material-ui/core/Container";

function Header() {
  return (
    <header className="headerStyle">
      <Container maxWidth='md'>
        <h1>Todo List</h1>{" "}
      </Container>
    </header>
  );
}

export default Header;
