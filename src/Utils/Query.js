import { gql } from "@apollo/client";

export const GET_PROFILE = gql `
query{
    users (where: {id: {_eq: 1}}){
        profile{
            firstName,
            lastName,
            biography
        }
        username
        contact{
            connection{
                username
            }
        }
    }
}`

export const GET_CONNECTION = gql`
query{
    users (where: {id: {_eq: 1}}){
        contact{
            connection{
                username
                profile{
                    firstName
                    lastName
                }
            }
        }
    }
}`
