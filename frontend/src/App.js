import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/launches';
import Launch from './components/launch';
import spacexImg from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="w-screen text-white bg-black h-screen overflow-scroll">
      <div className="flex justify-center flex-wrap">
        <img src={spacexImg} alt="spacexImg"/>
      </div>
        <Route exact path="/" component={Launches}/>
        <Route exact path="/launch/:flight_number" component={Launch}/>
      </div>
   </Router>
  </ApolloProvider>
  );
}

export default App;
