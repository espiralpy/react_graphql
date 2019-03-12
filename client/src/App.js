import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/launches';
import Launch from './components/launch';
import Site from './components/site';

import './App.css';

const client = new ApolloClient({
    uri: '/graphql'
});

class App extends Component {
    render() {
        return (
          <ApolloProvider client={client}>
            <Router>
              <div className="App container">
                  <h1>SpaceX</h1>
                  <Route exact path="/" component={Launches}/>
                  <Route exact path="/launch/:flight_number" component={Launch}/>
                  <Route exact path="/site/:flight_number" component={Site}/>
              </div>
            </Router>
          </ApolloProvider>
        );
    }
}

export default App;
