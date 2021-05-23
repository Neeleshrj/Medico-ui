import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/signin';
import SignUp from '../screens/signup';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='SignUp' component={SignUp} />
        <RootStack.Screen name='SignIn' component={SignIn} /> 
    </RootStack.Navigator>
);

export default RootStackScreen;
    
