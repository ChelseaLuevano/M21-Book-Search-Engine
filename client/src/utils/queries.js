import { gql } from '@apollo/client';

// User apollo server to get these queries and test them
export const QUERY_USER = gql `
    query getSingleUser {
        user {
            _id
            username
            email
            password
            savedBooks
        }
    }
`;