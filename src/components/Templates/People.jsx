import React from 'react';

import {
  Container,
  Row,
  Title,
  Value,
  Links,
} from '../common/templateContainers';

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
    homeworld,
  } = props;

  return (
    <Container>
      <Row>
        <Title>Name:</Title>
        <Value>{name}</Value>
      </Row>

      <Row>
        <Title>Birth year:</Title>
        <Value>{birth_year}</Value>
      </Row>

      <Row>
        <Title>Eye color:</Title>
        <Value>{eye_color}</Value>
      </Row>

      <Row>
        <Title>Gender:</Title>
        <Value>{gender}</Value>
      </Row>

      <Row>
        <Title>Hair color:</Title>
        <Value>{hair_color}</Value>
      </Row>

      <Row>
        <Title>Height:</Title>
        <Value>{height}</Value>
      </Row>

      <Row>
        <Title>Mass:</Title>
        <Value>{mass}</Value>
      </Row>

      <Row>
        <Title>Skin color:</Title>
        <Value>{skin_color}</Value>
      </Row>

      <Row>
        <Title>Homeworld:</Title>
        <Value>
          <Links data={homeworld} />
        </Value>
      </Row>

      <Row>
        <Title>Films:</Title>
        <Value>
          <Links data={films} />
        </Value>
      </Row>

      <Row>
        <Title>Species:</Title>
        <Value>
          <Links data={species} />
        </Value>
      </Row>

      <Row>
        <Title>Starships:</Title>
        <Value>
          <Links data={starships} />
        </Value>
      </Row>

      <Row>
        <Title>Vehicles:</Title>
        <Value>
          <Links data={vehicles} />
        </Value>
      </Row>
    </Container>
  );
};

export default People;
