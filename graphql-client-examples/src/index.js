import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

/*const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});*/

const client = new ApolloClient({
  uri: 'https://1960a990-f68b-46bd-b6a4-4897398fcbd7-southcentralus.apps.astra.datastax.com/api/graphql/netflix_keyspace',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
  headers: {
    "Content-Type": "application/json",
    "X-Cassandra-Token": "AstraCS:BjbroculuiBIikPmnpZiWduq:cce2745e2f6e78f662d2d76f84bbfe6cd4b1a9f28a7d01091f4672eb1ec2dde6"
  },
});

/*const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});*/

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
