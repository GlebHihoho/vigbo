import React from 'react';

import {
  Container,
  Row,
  Title,
  Value,
  Links,
} from '../common/templateContainers';

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

  return (
    <Container>
      <Row>
        <Title>Title:</Title>
        <Value>{title}</Value>
      </Row>

      <Row>
        <Title>Director:</Title>
        <Value>{director}</Value>
      </Row>

      <Row>
        <Title>Producer:</Title>
        <Value>{producer}</Value>
      </Row>

      <Row>
        <Title>Episode id:</Title>
        <Value>{episode_id}</Value>
      </Row>

      <Row>
        <Title>Opening crawl:</Title>
        <Value>{opening_crawl}</Value>
      </Row>

      <Row>
        <Title>Release date:</Title>
        <Value>{release_date}</Value>
      </Row>

      <Row>
        <Title>Characters:</Title>
        <Value>
          <Links data={characters} />
        </Value>
      </Row>

      <Row>
        <Title>Planets:</Title>
        <Value>
          <Links data={planets} />
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

export default Films;
