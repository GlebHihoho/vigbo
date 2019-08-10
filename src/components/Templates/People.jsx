import React from 'react';
import isEmpty from 'lodash/isEmpty';

const People = (props) => {
  const {
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
    species,
    starships,
    vehicles,
  } = props;

  const filmsContent = films.map(film => film.title).join(', ');
  const speciesContent = species.map(s => s.name).join(', ');
  const starshipsContent = starships.map(ship => ship.name).join(', ');
  const vehiclesContent = vehicles.map(vehicle => vehicle.name).join(', ');

  return (
    <div>
      <div>{`Birth year: ${birth_year}`}</div>
      <div>{`Eye color: ${eye_color}`}</div>
      <div>{`Gender: ${gender}`}</div>
      <div>{`Hair color: ${hair_color}`}</div>
      <div>{`Height: ${height}`}</div>
      <div>{`Mass: ${mass}`}</div>
      <div>{`Name: ${name}`}</div>
      <div>{`Skin color: ${skin_color}`}</div>

      {
        !isEmpty(films) && (
          <div>{`Films: ${filmsContent}`}</div>
        )
      }
      {
        !isEmpty(species) && (
          <div>{`Species: ${speciesContent}`}</div>
        )
      }
      {
        !isEmpty(starships) && (
          <div>{`Starships: ${starshipsContent}`}</div>
        )
      }
      {
        !isEmpty(vehicles) && (
          <div>{`Vehicles: ${vehiclesContent}`}</div>
        )
      }
    </div>
  );
};

export default People;
