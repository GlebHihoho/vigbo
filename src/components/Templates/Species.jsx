import React from 'react';
import isEmpty from 'lodash/isEmpty';

const Species = (props) => {
  const {
    name,
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    films,
    hair_colors,
    homeworld,
    language,
    people,
    skin_colors,
  } = props;

  const filmsContent = films.map(film => film.title).join(', ');
  const peopleContent = people.map(person => person.name).join(', ');

  return (
    <div>
      <div>{`Name: ${name}`}</div>
      <div>{`Average height: ${average_height}`}</div>
      <div>{`Average lifespan: ${average_lifespan}`}</div>
      <div>{`Classification: ${classification}`}</div>
      <div>{`Designation: ${designation}`}</div>
      <div>{`Eye colors: ${eye_colors}`}</div>
      <div>{`Hair colors: ${hair_colors}`}</div>
      <div>{`Homeworld ${homeworld}`}</div>
      <div>{`Language ${language}`}</div>
      <div>{`Skin colors: ${skin_colors}`}</div>

      {
        !isEmpty(films) && (
          <div>{`Films: ${filmsContent}`}</div>
        )
      }
      {
        !isEmpty(people) && (
          <div>{`Person: ${peopleContent}`}</div>
        )
      }
    </div>
  );
};

export default Species;
