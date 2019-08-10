import React from 'react';
import isEmpty from 'lodash/isEmpty';

const Starships = (props) => {
  const {
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    films,
    hyperdrive_rating,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    starship_class,
  } = props;

  const filmsContent = films.map(film => film.title).join(', ');

  return (
    <div>
      <div>{`Name: ${name}`}</div>
      <div>{`Class: ${starship_class}`}</div>
      <div>{`Consumables: ${consumables}`}</div>
      <div>{`Cost in credits: ${cost_in_credits}`}</div>
      <div>{`Crew: ${crew}`}</div>
      <div>{`Length: ${length}`}</div>
      <div>{`Manufacturer: ${manufacturer}`}</div>
      <div>{`Max atmosphering speed: ${max_atmosphering_speed}`}</div>
      <div>{`Model: ${model}`}</div>
      <div>{`Passengers: ${passengers}`}</div>
      <div>{`Cargo capacity: ${cargo_capacity}`}</div>
      <div>{`Hyperdrive Rating: ${hyperdrive_rating}`}</div>
      <div>{`MGLT: ${MGLT}`}</div>
      {
        !isEmpty(films) && (
          <div>{`Films: ${filmsContent}`}</div>
        )
      }
    </div>
  );
};

export default Starships;
