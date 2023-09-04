import React from 'react';
import MyNavigation from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

function App() {
  const checkInsAPI = new ApolloClient({
    uri: 'https://profound-marmot-29.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={checkInsAPI}>
      <SafeAreaProvider>
        <SafeAreaView style={tw`flex-1`}>
          <Header />
          <MyNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
