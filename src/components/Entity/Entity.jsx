import React, { useEffect, Fragment } from 'react';
import { useStore } from 'effector-react';

import {
  $entity,
  $isLoadingEntity,

  fetchEntity,
  resetStore,
} from '../../model/entityModel';
import { $entityType } from '../../model/entityTypeModel';

import Loader from '../common/Loader';
import templates from '../Templates/index';

const Entity = (props) => {
  const { match: { params: { id } } } = props;
  const entity = useStore($entity);
  const entityType = useStore($entityType);
  const isLoadingEntity = useStore($isLoadingEntity);

  useEffect(() => {
    fetchEntity(id);

    return () => resetStore();
  }, []);

  return (
    <Fragment>
      {
        isLoadingEntity
          ? <Loader />
          : templates[entityType].getTemplate(entity)
      }
    </Fragment>
  );
};

export default Entity;
