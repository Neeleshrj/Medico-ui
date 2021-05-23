import 'react-native-gesture-handler'; 
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './navigation/rootstackscreens';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
