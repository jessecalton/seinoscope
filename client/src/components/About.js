import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Seinoscope</h1>
        <p>An app about nothing</p>
      </Container>
    </Jumbotron>
  );
};

export default About;
