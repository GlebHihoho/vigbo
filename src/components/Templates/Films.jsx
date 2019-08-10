import React from 'react';
import isEmpty from 'lodash/isEmpty';

const Films = (props) => {
  const {
    characters,
    director,
    episode_id,
    opening_crawl,
    planets,
    producer,
    release_date,
    species,
    starships,
    title,
    vehicles,
  } = props;

  const charactersContent = characters.map(character => character.name).join(', ');
  const planetsContent = planets.map(p => p.name).join(', ');
  const speciesContent = species.map(s => s.name).join(', ');
  const starshipsContent = starships.map(starship => starship.name).join(', ');
  const vehiclesContent = vehicles.map(vehicle => vehicle.name).join(', ');

  return (
    <div>
      <div>{`Director: ${director}`}</div>
      <div>{`Episode id: ${episode_id}`}</div>
      <div>{`Opening crawl: ${opening_crawl}`}</div>
      <div>{`Producer: ${producer}`}</div>
      <div>{`Release date: ${release_date}`}</div>
      <div>{`Title: ${title}`}</div>
      {
        !isEmpty(characters) && (
          <div>{`Films: ${charactersContent}`}</div>
        )
      }
      {
        !isEmpty(planets) && (
          <div>{`Species: ${planetsContent}`}</div>
        )
      }
      {
        !isEmpty(species) && (
          <div>{`Starships: ${speciesContent}`}</div>
        )
      }
      {
        !isEmpty(starships) && (
          <div>{`Vehicles: ${starshipsContent}`}</div>
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

export default Films;
