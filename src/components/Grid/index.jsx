import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Grid = () => {
  return (
    <Container fluid>
      <Row>
        <Col style={{ backgroundColor: "red" }}>Header</Col>
      </Row>
      <Row>
        <Col md={2} style={{ backgroundColor: "green" }}>
          Sidebar
        </Col>
        <Row>
          <Col md={10} style={{ backgroundColor: "blue" }}>
            Tabela
          </Col>
          <Col style={{ backgroundColor: "purple" }}>Footer</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Grid;
