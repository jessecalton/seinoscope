import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to Seinoscope</h1>
        <p>Get your horoscope read, Seinfeld style.</p>
        <a href='https://en.wikipedia.org/wiki/Seinfeld#:~:text=Seinfeld%20is%20set%20predominantly%20in,the%20minutiae%20of%20daily%20life.'>
          An app about nothing
        </a>
      </Container>
    </Jumbotron>
  );
};

export default About;
