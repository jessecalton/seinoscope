import {
  GET_SEINOSCOPE,
  CLEAR_SEINOSCOPE,
  SET_BIRTHDATE,
} from '../actions/types';

const initialState = {
  birthDate: null,
  mainCharacter: null,
  secondaryCharacter: null,
  quote: null,
  episode: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BIRTHDATE:
      return {
        ...state,
        birthDate: action.payload,
      };
    case GET_SEINOSCOPE: {
      return {
        ...state,
        mainCharacter: action.payload,
      };
    }
    default:
      return state;
  }
};
