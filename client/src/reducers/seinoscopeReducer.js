import { GET_SEINOSCOPE, CLEAR_SEINOSCOPE } from '../actions/types';

const initialState = {
  mainCharacter: null,
  secondaryCharacter: null,
  quote: null,
  episode: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
