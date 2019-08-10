import React from 'react';
import styled from 'styled-components';

const Pagination = (props) => {
  const { changePage, nextPage, prevPage } = props;

  return (
    <Container>
      <Button
        type="button"
        onClick={() => changePage(prevPage)}
        disabled={!prevPage}
      >
        Prev Page
      </Button>

      <Button
        type="button"
        onClick={() => changePage(nextPage)}
        disabled={!nextPage}
      >
        Next Page
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;

  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  line-height: 16px;

  background-color: black;

  :hover {
    background-color: blue;
    cursor: pointer;
  }

  :disabled {
    background-color: grey;
  }
`;
