import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {StoreProvider} from 'easy-peasy';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import {setContext} from 'apollo-link-context';
// root routes
import Root from './routes';
// store
import {store} from './redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#102f4a',
    accent: 'yellow',
  },
};

const App = () => {
  const link = createHttpLink({
    uri: 'https://kity-graph.herokuapp.com/graphql',
  });
  const authLink = setContext((_, {headers}) => {
    const token = store.getState().auth.token;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const cache = new InMemoryCache();
  const client = new ApolloClient({link: authLink.concat(link), cache});
  return (
    <StoreProvider store={store}>
      <ApolloProvider client={client}>
        <PaperProvider theme={theme}>
          <Root />
        </PaperProvider>
      </ApolloProvider>
    </StoreProvider>
  );
};
export default App;
