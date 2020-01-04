import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launch from './components/launch';
import spacexImg from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="w-screen text-white bg-black h-screen overflow-scroll">
    <div className="flex justify-center flex-wrap">
        <img src={spacexImg} alt="spacexImg"/>
  </div>
  <div className="container my-12 mx-auto px-24">
       <Launch/>
  </div>

  </div>
  </ApolloProvider>
  );
}

export default App;
