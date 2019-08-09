import { createStore, createEffect, createEvent } from 'effector';

import dal from '../dal';
import { getId } from '../helpers';

import { $entityType } from './entityTypeModel';

export const $entityList = createStore([]);
export const $isLoadingEntityList = createStore(true);
export const $nextPage = createStore(null);
export const $prevPage = createStore(null);

export const fetchEntityList = createEvent();
export const changePage = createEvent();

const _fetchEntityList = createEffect();

_fetchEntityList.use((page) => {
  const entityType = $entityType.getState();

  return dal
    .getEntityList(entityType, page)
    .then((response) => {
      const { data: { results, next, previous } } = response;

      const list = results.map(el => ({
        id: getId(el.url),
        name: el.name || el.title,
      }));

      return {
        list,
        next: getId(next),
        prev: getId(previous),
      };
    });
});

fetchEntityList
  .watch(() => _fetchEntityList());

changePage
  .watch(page => _fetchEntityList(page));

$entityList
  .on(_fetchEntityList.done, (_, { result }) => [...result.list]);

$nextPage
  .on(_fetchEntityList.done, (_, { result }) => result.next);

$prevPage
  .on(_fetchEntityList.done, (_, { result }) => result.prev);

$isLoadingEntityList
  .on(_fetchEntityList, () => true)
  .on(_fetchEntityList.done, () => false)
  .on(_fetchEntityList.fail, () => false);
