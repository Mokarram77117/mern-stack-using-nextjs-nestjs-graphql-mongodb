import { gql } from "@apollo/client";

export  const CREATE_USER_MUTATION = gql`
mutation Mutation($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    image
    name
    title
    age
  }
}
`

export const UPDATE_USER_MUTATION = gql`
mutation Mutation($updateUserInput: UpdateUserInput!, $id: String!) {
  updateUser(updateUserInput: $updateUserInput, _id: $id) {
    _id
    name
    age
    title
    image
  }
}
`

export const DELETE_USER_MUTATION =gql`
mutation Mutation($id: String!) {
  deleteUser(_id: $id) {
    _id
    image
    name
    age
    title
  }
}
`
