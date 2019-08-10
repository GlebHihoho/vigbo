import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

export const Links = ({ data }) => {
  const filmsContent = data.map((element) => {
    const entityType = element.url.split('/')[4];
    const id = element.url.split('/')[5];

    return (
      <div key={uniqueId()}>
        <Link to={`/${entityType}/${id}`}>{element.title || element.name}</Link>
      </div>
    );
  });

  return !isEmpty(filmsContent) ? filmsContent : '-';
};

export const Container = styled.div`
  padding: 20px;

  border: 1px solid black;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  width: 300px;
  padding: 5px;

  text-align: left;
  font-weight: 900;
  font-style: italic;
`;

export const Value = styled.div`
  width: 500px;
  padding: 5px;
`;
