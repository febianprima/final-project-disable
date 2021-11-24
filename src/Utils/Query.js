import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query ($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      username
      profile {
        firstName
        lastName
        status
        biography
      }
      contact {
        connection {
          username
        }
      }
    }
  }
`;

export const GET_CONNECTION = gql`
  query {
    users(where: { id: { _eq: userID } }) {
      contact {
        connection {
          username
          profile {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const GET_FEED = gql`
  query ($userID: Int!) {
    users(where: { id: { _eq: $userID } }) {
      username
      profile {
        firstName
        lastName
      }
    }
  }
`;

export const GET_CHATROOM = gql`
  query ($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      username
      email
      password
      profile {
        firstName
        lastName
      }
    }
  }
`;

export const GET_JOBS = gql`
  query {
    jobs {
      gambar
      nama_pt
      persyaratan
      posisi
      id
    }
  }
`;

export const GET_JOBS_BY_ID = gql`
  query ($id: Int!) {
    jobs(where: { id: { _eq: $id } }) {
      tanggal
      email_pt
      gaji
      alamat_pt
      gambar
      nama_pt
      persyaratan
      posisi
      id
    }
  }
`;
