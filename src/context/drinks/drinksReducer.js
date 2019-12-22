import {
  SEARCH_DRINKS,
  GET_DRINK,
  SET_LOADING,
  CLEAR_DRINKS
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_DRINKS:
      return {
        ...state,
        drinks: action.payload,
        loading: false
      }
    case GET_DRINK:
      return {
        ...state,
        drink: action.payload,
        loading: false
      }
    case CLEAR_DRINKS:
      return {
        ...state,
        drinks: [],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
