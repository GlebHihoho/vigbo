import { createStore, createEvent } from 'effector';

export const $entityType = createStore('');

export const setEntityType = createEvent();

$entityType
  .on(setEntityType, (_, entityType) => entityType);
