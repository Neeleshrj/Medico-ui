import 'react-native-gesture-handler'; 
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './navigation/rootstackscreens';


const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
