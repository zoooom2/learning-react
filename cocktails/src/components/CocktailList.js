import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktailData, loading } = useGlobalContext();

  let mapDrink = cocktailData.map((data) => (
    <Cocktail {...data} key={data.idDrink} />
  ));

  if (loading) return <Loading />;
  return (
    <div className='section'>
      <h4 className='section-title'>Cocktails</h4>

      {cocktailData.length === 0 ? (
        <h1>No cocktail data available</h1>
      ) : (
        <div className='cocktails-center'>{mapDrink}</div>
      )}
    </div>
  );
};

export default CocktailList;
