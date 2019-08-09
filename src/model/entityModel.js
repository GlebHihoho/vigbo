import { createStore, createEffect, createEvent } from 'effector';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';

import dal from '../dal';

import { $entityType } from './entityTypeModel';

export const $entity = createStore({});
export const $isLoadingEntity = createStore(true);

export const fetchEntity = createEvent();
export const resetStore = createEvent();

const _fetchEntity = createEffect();

_fetchEntity.use((id) => {
  const entityType = $entityType.getState();
  let entity = null;
  let propsWithDeficiencyData = null;

  return dal
    .getEntityById(entityType, id)
    .then(response => response.data)
    .then((response) => {
      entity = response;
      const requests = [];

      propsWithDeficiencyData = Object
        .keys(response)
        .filter(key => isArray(response[key]) && !isEmpty(response[key]));

      propsWithDeficiencyData
        .forEach(key => response[key].map(url => requests.push(dal.getEntityByUrl(url))));

      return Promise.all(requests);
    })
    .then(responses => responses.map(response => response.data))
    .then((response) => {
      const rest = {};

      propsWithDeficiencyData.forEach((prop) => {
        rest[prop] = [];

        if (entityType === 'films') {
          rest.characters = [];
        }
      });

      response.forEach((res) => {
        propsWithDeficiencyData.forEach((prop) => {
          const type = res.url.split('/')[4];
          if (type === prop) {
            rest[prop].push(res);
          }

          if (type === 'people' && prop === 'characters') {
            rest.characters.push(res);
          }
        });
      });

      return Object.assign(entity, rest);
    });
});

fetchEntity
  .watch(id => _fetchEntity(id));

$entity
  .on(_fetchEntity.done, (_, { result }) => result);

$isLoadingEntity
  .on(_fetchEntity, () => true)
  .on(_fetchEntity.done, () => false)
  .on(_fetchEntity.fail, () => false);
