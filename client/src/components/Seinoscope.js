import React from 'react';
import { connect } from 'react-redux';

const Seinoscope = ({ seinoscope: { birthDate } }) => {
  if (birthDate === null) {
    return null;
  } else {
    return (
      <div>
        <h3>Seinoscope reading here</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Seinoscope);
