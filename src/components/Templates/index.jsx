import React from 'react';

import Vehicles from './Vehicles';
import Starships from './Starships';
import Species from './Species';
import Planets from './Planets';
import People from './People';
import Films from './Films';

import { entityKeys } from '../../constants';

export default {
  [entityKeys.vehicles]: {
    getTemplate: props => <Vehicles {...props} />,
  },
  [entityKeys.starships]: {
    getTemplate: props => <Starships {...props} />,
  },
  [entityKeys.species]: {
    getTemplate: props => <Species {...props} />,
  },
  [entityKeys.planets]: {
    getTemplate: props => <Planets {...props} />,
  },
  [entityKeys.people]: {
    getTemplate: props => <People {...props} />,
  },
  [entityKeys.films]: {
    getTemplate: props => <Films {...props} />,
  },
};
