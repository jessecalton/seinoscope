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
  mainCharacterImage: null,
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
        mainCharacter: action.payload.mainCharacter,
        secondaryCharacter: action.payload.secondaryCharacter,
        quote: action.payload.quote,
        mainCharacterImage: action.payload.mainCharacterImage,
        secondaryCharacterImage: action.payload.secondaryCharacterImage,
        episode: action.payload.episode,
      };
    }
    case CLEAR_SEINOSCOPE: {
      return {
        ...state,
        birthDate: null,
        mainCharacter: null,
        secondaryCharacter: null,
        quote: null,
        episode: null,
        mainCharacterImage: null,
      };
    }
    default:
      return state;
  }
};
