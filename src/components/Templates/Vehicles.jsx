import React from 'react';

import {
  Container,
  Row,
  Title,
  Value,
  Links,
} from '../common/templateContainers';

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

  return (
    <Container>
      <Row>
        <Title>Name:</Title>
        <Value>{name}</Value>
      </Row>

      <Row>
        <Title>Class</Title>
        <Value>{vehicle_class}</Value>
      </Row>

      <Row>
        <Title>Consumables:</Title>
        <Value>{consumables}</Value>
      </Row>

      <Row>
        <Title>Cost in credits:</Title>
        <Value>{cost_in_credits}</Value>
      </Row>

      <Row>
        <Title>Crew:</Title>
        <Value>{crew}</Value>
      </Row>

      <Row>
        <Title>Length:</Title>
        <Value>{length}</Value>
      </Row>

      <Row>
        <Title>Manufacturer:</Title>
        <Value>{manufacturer}</Value>
      </Row>

      <Row>
        <Title>Max atmosphering speed:</Title>
        <Value>{max_atmosphering_speed}</Value>
      </Row>

      <Row>
        <Title>Model:</Title>
        <Value>{model}</Value>
      </Row>

      <Row>
        <Title>Passengers:</Title>
        <Value>{passengers}</Value>
      </Row>

      <Row>
        <Title>Cargo capacity:</Title>
        <Value>{cargo_capacity}</Value>
      </Row>

      <Row>
        <Title>Pilots:</Title>
        <Value>
          <Links data={pilots} />
        </Value>
      </Row>

      <Row>
        <Title>Films:</Title>
        <Value>
          <Links data={films} />
        </Value>
      </Row>
    </Container>
  );
};

export default Vehicles;
