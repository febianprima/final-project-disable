import React from "react";
import { Routes, Route } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Feed from "../Pages/Feed";
import Profile from "../Pages/Profile";
import Create from "../Pages/Create";
import Chat from "../Pages/ChatRoom";

function App() {
  const client = new ApolloClient({
    uri: "https://d-is-able.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": `WT9sL6pGzoGhrsimm001JI0rMrB37d901kDFnMX5yuKWKmleLnZz2nQjrgiq7IcQ`,
    },
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create" element={<Create />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
