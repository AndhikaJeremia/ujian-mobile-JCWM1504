import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import MainNavi from './src/navigation/Main_navi'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import allReducer from './src/reducer'

const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools((applyMiddleware(ReduxThunk)))
)

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainNavi />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
