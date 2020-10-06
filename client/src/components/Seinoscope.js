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
    secondaryCharacterImage,
  },
}) => {
  if (birthDate === null || mainCharacterImage === null) {
    return null;
  } else {
    return (
      <Fragment>
        <Jumbotron>
          <h3>Today, You are {mainCharacter}</h3>
          <Container className='seinoscope-container'>
            <Container className='main-character'>
              <Image src={require(`../${mainCharacterImage}`)} roundedCircle />
              <h3 className='quote'>"{quote}"</h3>
            </Container>
            <div className='secondary-character'>
              <h6 className='ascendant'>
                With an ascendant {secondaryCharacter}
              </h6>
              <Image
                src={require(`../${secondaryCharacterImage}`)}
                roundedCircle
              />
            </div>
          </Container>
        </Jumbotron>
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Seinoscope);
