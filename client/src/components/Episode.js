import React from 'react';
import { connect } from 'react-redux';

const Episode = ({ seinoscope: { episode } }) => {
  if (episode === null) {
    return null;
  } else {
    return (
      <div className='Episode'>
        <h3 className='episode-header'>Your Special Episode</h3>
        <div className='vhs-body'>
          <div className='vhs'>
            <span className='dyan'>Seinfeld</span>
            <span className='dyan'>
              Season {episode.Season} Episode {episode.Episode}
            </span>
            <span className='dyan'>{episode.Title}</span>
            <div className='footer'>
              <span className='footer-vhs'>VHS</span>
              <span className='footer-vid'>VIDEO CASSETTE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  seinoscope: state.seinoscope,
});

export default connect(mapStateToProps, null)(Episode);
