import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Seinoscope = ({
  seinoscope: {
    birthDate,
    mainCharacter,
    quote,
    secondaryCharacter,
    mainCharacterImage,
  },
}) => {
  if (birthDate === null || mainCharacterImage === null) {
    return null;
  } else {
    return (
      <Fragment>
        <Jumbotron>
          <h3>You are {mainCharacter}</h3>
          <Container className='main-character'>
            <Image src={require(`../${mainCharacterImage}`)} roundedCircle />
          </Container>
        </Jumbotron>
        <p>{quote}</p>
        <p>With an ascendant {secondaryCharacter}</p>
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Seinoscope);
