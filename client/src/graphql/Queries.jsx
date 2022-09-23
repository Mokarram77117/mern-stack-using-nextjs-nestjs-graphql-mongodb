import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
query Query {
    users {
      _id
      image
      name
      age
      title
    }
  }
`

export const  QUERY_ONE_USER = gql`
query Query($id: String!) {
  user(_id: $id) {
    _id
    image
    name
    age
    title
  }
}

`
export const QUERY_BY_USERNAME =gql`
query Query($data: String!) {
  usersbyname(data: $data) {
    _id
    name
    age
    title
    image
  }
}`
