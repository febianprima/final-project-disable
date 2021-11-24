import { gql } from "@apollo/client";

export const GET_PROFILE = gql `
query($id: Int!){
    users (where: {id: {_eq: $id}}){
        username
        profile{
            firstName,
            lastName,
            status,
            biography
        }
        contact{
            connectionID
        }
    }
}`

export const GET_CONNECTION = gql`
query($id: Int!){
    users (where: {id: {_eq: $id}}){
        username
        profile{
            firstName
            lastName
        }
        contact{
            connection{
                username
                profile{
                    firstName
                    lastName
                    status
                }
            }
        }
    }
}`

export const GET_FEED =gql`
query($id: Int!){
    users (where: {id: {_eq: $id}}){
        username
        profile{
            firstName
            lastName
            status
        }
        contact{
            connectionID
        }
        contents{
            article
            user{
                username
                profile{
                    firstName
                    lastName
                }
            }
        }
    }
}`

export const GET_CHATROOM = gql `
query($id: Int!){
    users (where: {id: {_eq: $id}}){
        username
        email
        password
        profile{
            firstName,
            lastName
        }
    }
}`