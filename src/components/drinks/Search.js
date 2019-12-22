import React, { useState, useContext } from 'react'
import DrinksContext from '../../context/drinks/drinksContext';

const Search = () => {
  const drinksContext = useContext(DrinksContext);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('Please enter a term!')
    } else {
      drinksContext.searchDrinks(text);
      setText('');
    }
  }

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search some drinks...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn'
        />
      </form>
      {drinksContext.drinks.length > 0 && (
        <button onClick={drinksContext.clearDrinks}>Clear</button>
      )}
    </div>
  )
}

export default Search;
