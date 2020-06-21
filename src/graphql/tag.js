import gql from 'graphql-tag';

export const GET_PROFILE = gql`
  {
    profile {
      name
      photo
      email
      role
      myTenant
      allUsers
    }
  }
`;

export const ALL_USER = gql`
  {
    allUser {
      id
      name
      photo
      role
    }
  }
`;

export const LOGIN_MUTATE = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

export const DETAIL_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      name
      photo
      role
      email
    }
  }
`;

export const ALL_ROLE = gql`
  {
    role {
      role
    }
  }
`;

export const CREATE_USER = gql`
  mutation create(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(name: $name, email: $email, password: $password, role: $role)
  }
`;

export const EDIT_USER = gql`
  mutation edit($id: String!, $name: String!, $role: String!) {
    editUser(id: $id, name: $name, role: $role)
  }
`;
