import React from 'react';

import {
  Container,
  Row,
  Title,
  Value,
  Links,
} from '../common/templateContainers';

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

  return (
    <Container>
      <Row>
        <Title>Name:</Title>
        <Value>{name}</Value>
      </Row>

      <Row>
        <Title>Average height:</Title>
        <Value>{average_height}</Value>
      </Row>

      <Row>
        <Title>Average lifespan:</Title>
        <Value>{average_lifespan}</Value>
      </Row>

      <Row>
        <Title>Classification:</Title>
        <Value>{classification}</Value>
      </Row>

      <Row>
        <Title>Designation:</Title>
        <Value>{designation}</Value>
      </Row>

      <Row>
        <Title>Eye colors:</Title>
        <Value>{eye_colors}</Value>
      </Row>

      <Row>
        <Title>Hair colors:</Title>
        <Value>{hair_colors}</Value>
      </Row>

      <Row>
        <Title>Homeworld:</Title>
        <Value>
          <Links data={homeworld} />
        </Value>
      </Row>

      <Row>
        <Title>Language:</Title>
        <Value>{language}</Value>
      </Row>

      <Row>
        <Title>Skin colors:</Title>
        <Value>{skin_colors}</Value>
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
          <Links data={people} />
        </Value>
      </Row>
    </Container>
  );
};

export default Species;
