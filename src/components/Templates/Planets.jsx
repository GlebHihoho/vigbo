import React from 'react';
import isEmpty from 'lodash/isEmpty';

const Planets = (props) => {
  const {
    name,
    climate,
    diameter,
    films,
    gravity,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
  } = props;

  const filmsContent = films.map(film => film.title).join(', ');
  const residentsContent = residents.map(resident => resident.name).join(', ');

  return (
    <div>
      <div>{`Name: ${name}`}</div>
      <div>{`Climate: ${climate}`}</div>
      <div>{`Diameter: ${diameter}`}</div>
      <div>{`Gravity: ${gravity}`}</div>
      <div>{`Orbital period: ${orbital_period}`}</div>
      <div>{`Population: ${population}`}</div>
      <div>{`Rotation period: ${rotation_period}`}</div>
      <div>{`Surface water: ${surface_water}`}</div>
      <div>{`Terrain ${terrain}`}</div>

      {
        !isEmpty(films) && (
          <div>{`Films: ${filmsContent}`}</div>
        )
      }
      {
        !isEmpty(residents) && (
          <div>{`Person: ${residentsContent}`}</div>
        )
      }
    </div>
  );
};

export default Planets;
