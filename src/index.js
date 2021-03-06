import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider as ContextProvider} from 'react-redux';

import{
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import {createUploadLink} from 'apollo-upload-client';

import theme from './mainTheme';

const store = createStore(allReducers);
const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4000/graphql'
  }),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ContextProvider store={store}>
          <App />
        </ContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
