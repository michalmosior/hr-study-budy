import React from 'react';
import { users } from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.style.js';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
