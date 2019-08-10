import React from 'react';
import isEmpty from 'lodash/isEmpty';
// import styled from 'styled-components';

const Vehicles = (props) => {
  const {
    name,
    vehicle_class,
    consumables,
    cost_in_credits,
    cargo_capacity,
    crew,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    passengers,
    pilots,
    films,
  } = props;

  const pilotsContent = pilots.join(', ');
  const filmsContent = films.map(film => film.title).join(', ');

  return (
    <div>
      <div>{`Name: ${name}`}</div>
      <div>{`Class: ${vehicle_class}`}</div>
      <div>{`Consumables: ${consumables}`}</div>
      <div>{`Cost in credits: ${cost_in_credits}`}</div>
      <div>{`Crew: ${crew}`}</div>
      <div>{`Length: ${length}`}</div>
      <div>{`Manufacturer: ${manufacturer}`}</div>
      <div>{`Max atmosphering speed: ${max_atmosphering_speed}`}</div>
      <div>{`Model: ${model}`}</div>
      <div>{`Passengers: ${passengers}`}</div>
      <div>{`Cargo capacity: ${cargo_capacity}`}</div>
      {
        !isEmpty(pilots) && (
          <div>{`Pilots: ${pilotsContent}`}</div>
        )
      }
      {
        !isEmpty(films) && (
          <div>{`Films: ${filmsContent}`}</div>
        )
      }
    </div>
  );
};

export default Vehicles;
