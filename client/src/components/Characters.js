import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const Characters = ({
  seinoscope: {
    mainCharacter,
    quote,
    secondaryCharacter,
    mainCharacterImage,
    secondaryCharacterImage,
  },
}) => {
  return (
    <Fragment>
      <Container className='character-container'>
        <h3>Today, You are {mainCharacter}</h3>
        <Container className='main-character'>
          <Image src={require(`../${mainCharacterImage}`)} roundedCircle />
          <h3 className='quote'>"{quote}"</h3>
        </Container>
        <div className='secondary-character'>
          <h6 className='ascendant'>With an ascendant {secondaryCharacter}</h6>
          <Image src={require(`../${secondaryCharacterImage}`)} roundedCircle />
        </div>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});
export default connect(mapStateToProps, null)(Characters);
