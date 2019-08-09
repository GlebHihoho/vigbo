import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import {
  $entity,
  $isLoadingEntity,

  fetchEntity,
} from '../../model/entityModel';

const Entity = (props) => {
  const { match: { params: { id } } } = props;
  const entity = useStore($entity);
  const isLoadingEntity = useStore($isLoadingEntity);

  useEffect(() => {
    fetchEntity(id);
  }, []);

  console.log('entity', entity);

  return (
    <div>
      {
        isLoadingEntity
          ? <div>Loading...</div>
          : 'Entity'
      }
    </div>
  );
};

export default Entity;
