import React from 'react';

import {
  Container,
  Row,
  Title,
  Value,
  Links,
} from '../common/templateContainers';

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

  return (
    <Container>
      <Row>
        <Title>Name:</Title>
        <Value>{name}</Value>
      </Row>

      <Row>
        <Title>Climate:</Title>
        <Value>{climate}</Value>
      </Row>

      <Row>
        <Title>Diameter:</Title>
        <Value>{diameter}</Value>
      </Row>

      <Row>
        <Title>Gravity:</Title>
        <Value>{gravity}</Value>
      </Row>

      <Row>
        <Title>Orbital period:</Title>
        <Value>{orbital_period}</Value>
      </Row>

      <Row>
        <Title>Population:</Title>
        <Value>{population}</Value>
      </Row>

      <Row>
        <Title>Rotation period:</Title>
        <Value>{rotation_period}</Value>
      </Row>

      <Row>
        <Title>Surface water:</Title>
        <Value>{surface_water}</Value>
      </Row>

      <Row>
        <Title>Terrain:</Title>
        <Value>{terrain}</Value>
      </Row>

      <Row>
        <Title>Films:</Title>
        <Value>
          <Links data={films} />
        </Value>
      </Row>

      <Row>
        <Title>Person:</Title>
        <Value>
          <Links data={residents} />
        </Value>
      </Row>
    </Container>
  );
};

export default Planets;
