import { createStore, createEffect, createEvent } from 'effector';

import dal from '../dal';
import { getId } from '../helpers';

export const $entityType = createStore('');
export const $entityList = createStore([]);
export const $isLoadingEntityList = createStore(true);
export const $nextPage = createStore(null);
export const $prevPage = createStore(null);

export const setEntityType = createEvent();
export const refreshStore = createEvent();
export const changePage = createEvent();

const _fetchEntityList = createEffect();

_fetchEntityList
  .use((page) => {
    const entityType = $entityType.getState();

    return dal
      .getEntity(entityType, page)
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

changePage
  .watch(page => _fetchEntityList(page));

$entityType.updates.watch(() => _fetchEntityList());

$entityType
  .on(setEntityType, (_, entityType) => entityType);

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
