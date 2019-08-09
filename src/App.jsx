import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import ResourcesList from './components/Header';
import EntityList from './components/EntityList';

import { entityList } from './constants/entityList';


const App = () => (
  <Container>
    <Router>
      <ResourcesList />
      <Switch>
        {/* <Route path="/people/:id" component={People} /> */}

        {
          entityList.map(entity => (
            <Route
              key={entity}
              path={`/${entity}`}
              component={EntityList}
              exact
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
