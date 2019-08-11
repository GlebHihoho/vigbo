import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled, { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Entity from './components/Entity';
import EntityList from './components/EntityList';
import PageNotFound from './components/PageNotFound';

import { entities } from './constants';

const App = () => (
  <MainContainer>
    <Router>
      <Header />

      <MainContent>
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

          <Route path="*" component={PageNotFound} />
        </Switch>
      </MainContent>

    </Router>
    <GlobalStyle />
  </MainContainer>
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

const MainContainer = styled.div`
  width: 900px;
  height: 100vh;
  margin: 0 auto;
`;

const MainContent = styled.div`
  height: calc(100vh - 60px);
`;
