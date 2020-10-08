import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Episode from './Episode';
import Characters from './Characters';

const Seinoscope = ({ seinoscope: { birthDate, mainCharacterImage } }) => {
  if (birthDate === null || mainCharacterImage === null) {
    return null;
  } else {
    return (
      <Fragment>
        <Jumbotron>
          <Container className='seinoscope-container'>
            <Characters />
            <Episode />
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
