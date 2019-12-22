import React, { Component } from 'react';
import Search from './components/drinks/Search';
import DrinkList from './components/drinks/DrinkList'
import DrinksState from './context/drinks/DrinksState';
import './App.css';

class App extends Component {
  render() {
    return (
      <DrinksState>
           Hello
          <Search/>
          <DrinkList/>
      </DrinksState>

    )
  }

}

export default App;
