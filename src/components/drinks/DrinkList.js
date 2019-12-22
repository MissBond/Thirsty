import React, {useContext} from 'react';
import DrinksContext from '../../context/drinks/drinksContext';

const DrinkList = () => {
  const drinksContext = useContext(DrinksContext);
  const {drinks} = drinksContext;

  return (
    <div>
      {drinks.map(drink => (
        <h1>{drink.strDrink}</h1>
      ))}
    </div>
  )


}


export default DrinkList;
