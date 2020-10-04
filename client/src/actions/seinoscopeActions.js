import axios from 'axios';
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

export const getSeinoscope = (birthDate) => async (dispatch) => {
  try {
    const res = await axios.get('/api/seinoscope', { params: birthDate });
    dispatch({ type: GET_SEINOSCOPE, payload: res.data.mainCharacters });
  } catch (error) {
    console.log(error);
  }
};
