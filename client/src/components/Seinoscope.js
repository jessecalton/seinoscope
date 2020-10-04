import React from 'react';
import { connect } from 'react-redux';

const Seinoscope = ({
  seinoscope: { birthDate, mainCharacter, quote, secondaryCharacter },
}) => {
  if (birthDate === null) {
    return null;
  } else {
    return (
      <div>
        <h3>You are {mainCharacter}</h3>
        <p>{quote}</p>
        <p>With an ascendant {secondaryCharacter}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Seinoscope);
