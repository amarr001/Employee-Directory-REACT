import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {

  return (
    <div>
      <Hero backgroundImage="https://image.freepik.com/free-vector/flat-multiracial-group-people_52683-19067.jpg">
        <h1>Employee Directory</h1>
        <h2>Find the best people here!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to TTR Employee Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p> 
            </p>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
