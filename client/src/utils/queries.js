import { gql } from '@apollo/client';

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