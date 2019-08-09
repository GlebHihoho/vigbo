import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { entityList } from '../../constants/entityList';

const Header = () => (
  <List>
    {
      entityList.map(item => (
        <NavLinkWrap
          key={item}
          to={`/${item}`}
          activeClassName="active"
        >
          {item}
        </NavLinkWrap>
      ))
      }
  </List>
);

export default Header;

const List = styled.div`
  display: flex;
  justify-content: center;

  background-color: black;
`;

const NavLinkWrap = styled(NavLink)`
  padding: 20px 35px;

  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;

  :hover {
    background-color: blue;
  }
`;
