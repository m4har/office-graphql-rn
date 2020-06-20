import React from 'react';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

// root routes
import Root from './routes';

const link = createHttpLink({uri: 'https://kity-graph.herokuapp.com/graphql'});
const cache = new InMemoryCache();
const client = new ApolloClient({link, cache});
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#102f4a',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </PaperProvider>
  );
};
export default App;
