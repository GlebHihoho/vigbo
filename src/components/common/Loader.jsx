import React from 'react';
import styled from 'styled-components';

const Loader = () => <Container>Loading...</Container>;

export default Loader;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;
