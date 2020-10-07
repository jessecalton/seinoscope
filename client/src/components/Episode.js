import React from 'react';
import { connect } from 'react-redux';

const Episode = ({ seinoscope: { episode } }) => {
  if (episode === null) {
    return null;
  } else {
    return (
      <div>
        <h3>An episode deserving your attention:</h3>
        <p>
          Season {episode.Season} Episode {episode.Episode}
        </p>
        <p>{episode.Title}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Episode);
