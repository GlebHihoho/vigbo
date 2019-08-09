import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled, { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import ResourcesList from './components/Header';
import EntityList from './components/EntityList';
import Entity from './components/Entity';

import { entities } from './constants';

const App = () => (
  <Container>
    <Router>
      <ResourcesList />
      <Switch>
        {
          entities.map(entity => (
            <Route
              key={entity}
              path={`/${entity}`}
              component={EntityList}
              exact
            />
          ))
        }

        {
          entities.map(entity => (
            <Route
              key={uniqueId()}
              path={`/${entity}/:id`}
              component={Entity}
            />
          ))
        }

        <Redirect exact from="/" to="/people" />
      </Switch>
    </Router>
    <GlobalStyle />
  </Container>
);

export default App;

const GlobalStyle = createGlobalStyle`
  body, ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Geneva, Arial, Helvetica, sans-serif;
  }

  .active {
    color: yellow;
  }
`;

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
`;
