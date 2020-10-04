import {
  GET_SEINOSCOPE,
  CLEAR_SEINOSCOPE,
  SET_BIRTHDATE,
  CLEAR_BIRTHDATE,
} from './types';

export const setBirthdate = (birthDate) => {
  return {
    type: SET_BIRTHDATE,
    payload: birthDate,
  };
};
