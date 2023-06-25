import { gql } from '@apollo/client';

export const ADD_USER = gql `
// do I need to add password and email to line 5 as a required variable to make a user account?
    mutation addUser($username: String!) {
        addUser(username: $username) {
            username
            email
            password
        }
    }
`;