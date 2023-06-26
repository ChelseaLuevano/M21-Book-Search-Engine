import { gql } from '@apollo/client';

// User apollo server to get these queries and test them
export const QUERY_BOOKS = gql `
    query getBooks {
        books{
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;