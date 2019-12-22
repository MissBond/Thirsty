import React, { useReducer } from 'react';
import axios from 'axios';
import DrinksContext from './drinksContext';
import DrinksReducer from './drinksReducer';
import {
  SEARCH_DRINKS,
  GET_DRINK,
  SET_LOADING,
  CLEAR_DRINKS
} from '../types';

let cocktailClientId = 1;

const DrinkState = props => {
  const initialState = {
    drinks: [],
    drink: {},
    loading: false
  }

  const [state, dispatch] = useReducer(DrinksReducer, initialState);

  //Search Drinks
  const searchDrinks = async searchTerm => {
    setLoading();

    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    console.log(res.data.drinks);

    dispatch({
      type: SEARCH_DRINKS,
      payload: res.data.drinks
    })
  }

  //Get Single Drink
  const getDrink = async singleDrink => {
    setLoading();

    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${singleDrink}`);
    console.log(res.data.drinks);

    dispatch({
      type: GET_DRINK,
      payload: res.data.drinks
    })
  }

  //Clear Drinks
  const clearDrinks = () => dispatch({ type: CLEAR_DRINKS});

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING});

  return <DrinksContext.Provider
    value={{
      drinks: state.drinks,
      drink: state.drink,
      loading: state.leading,
      searchDrinks,
      clearDrinks,
      getDrink
    }}
    >
      {props.children}
    </DrinksContext.Provider>
}

export default DrinkState;
