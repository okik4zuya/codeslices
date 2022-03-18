import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          width: "100%",
          position: "relative",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Jauzatu 2022
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
