import React, { useEffect, Fragment } from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  $isLoadingEntityList,
  $entityList,
  $nextPage,
  $prevPage,

  fetchEntityList,
  changePage,
  resetStore,
} from '../../model/entityListModel';

import Pagination from '../Pagination';
import Loader from '../common/Loader';

const EntityList = ({ location }) => {
  const { pathname } = location;
  const entityList = useStore($entityList);
  const isLoadingEntityList = useStore($isLoadingEntityList);
  const nextPage = useStore($nextPage);
  const prevPage = useStore($prevPage);

  useEffect(() => {
    fetchEntityList();

    return () => resetStore();
  }, []);

  return (
    <Container>
      <List>
        {
          isLoadingEntityList
            ? <Loader />
            : (
              <Fragment>
                {
                  entityList.map(
                    entity => (
                      <Item key={entity.id}>
                        <Link to={`${pathname}/${entity.id}`}>{entity.name}</Link>
                      </Item>
                    ),
                  )
                }

                <Pagination
                  nextPage={nextPage}
                  prevPage={prevPage}
                  changePage={changePage}
                />
              </Fragment>
            )
        }
      </List>
    </Container>
  );
};

export default EntityList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  text-align: center;
`;

const List = styled.div`
  width: 100%;
`;

const Item = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
`;
