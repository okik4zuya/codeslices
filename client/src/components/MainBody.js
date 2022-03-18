import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header/Header";

const MainBody = ({ children }) => {
  return (
    <>
      <div className="fixed">
        <Header />
      </div>
      <Container>
        <div className="page">{children}</div>
      </Container>
    </>
  );
};

export default MainBody;
