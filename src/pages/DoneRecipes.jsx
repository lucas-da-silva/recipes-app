import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FiltersFoods from '../components/FiltersFoods';
import Footer from '../components/Footer';
import FoodsContext from '../provider/FoodsContext';
import DoneRecipeCard from '../components/DoneRecipeCard';
import iconDone from '../images/iconDone.svg';
import '../styles/DoneRecipes.css';

function DoneRecipes() {
  const { getDoneRecipes,
    doneRecipes, filteredDoneRecipes, setPage } = useContext(FoodsContext);

  useEffect(() => {
    getDoneRecipes();
    setPage('done');
  }, []);

  return (
    <div>
      <section>
        <Header title="Done Recipes" icon={ iconDone } />
        <FiltersFoods filterFunction={ filteredDoneRecipes } />
        <div className="cards-cotainer">
          {
            doneRecipes
        && (doneRecipes.length > 0 && doneRecipes.map(
          (
            {
              id,
              nationality,
              image,
              category,
              name,
              doneDate,
              alcoholicOrNot,
              tags,
              type,
            },
            index,
          ) => (
            <DoneRecipeCard
              key={ id }
              id={ id }
              image={ image }
              nationality={ nationality }
              category={ category }
              name={ name }
              alcoholicOrNot={ alcoholicOrNot }
              doneDate={ doneDate }
              tags={ tags }
              index={ index }
              type={ type }
            />
          ),
        ))
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DoneRecipes;
