import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { entities } from '../../constants';

import { setEntityType } from '../../model/entityTypeModel';

const Header = (props) => {
  const { location } = props;
  const { pathname } = location;

  useEffect(() => {
    const entityType = `/${pathname.split('/')[1]}`;
    setEntityType(entityType);
  }, [pathname]);

  return (
    <List>
      {
        entities.map(item => (
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
};

export default withRouter(Header);

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
