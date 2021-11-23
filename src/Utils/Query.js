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
            connection{
                username
            }
        }
    }
}`

export const GET_CONNECTION = gql`
query{
    users (where: {id: {_eq: userID}}){
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

export const GET_FEED =gql`
query($userID: Int!){
    users (where: {id: {_eq: $userID}}){
        username
        profile{
            firstName
            lastName
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