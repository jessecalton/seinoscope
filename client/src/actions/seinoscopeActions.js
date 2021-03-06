import axios from 'axios';
import {
  GET_SEINOSCOPE,
  CLEAR_SEINOSCOPE,
  SET_BIRTHDATE,
  SEINOSCOPE_ERROR,
} from './types';

export const setBirthdate = (birthDate) => {
  return {
    type: SET_BIRTHDATE,
    payload: birthDate,
  };
};

export const clearSeinoscope = () => {
  return {
    type: CLEAR_SEINOSCOPE,
  };
};

export const getSeinoscope = (birthDate) => async (dispatch) => {
  clearSeinoscope();
  try {
    const res = await axios.get('/api/seinoscope', { params: birthDate });
    dispatch({ type: GET_SEINOSCOPE, payload: res.data.signReading });
  } catch (error) {
    dispatch({ type: SEINOSCOPE_ERROR, payload: error });
    console.log(error);
  }
};
