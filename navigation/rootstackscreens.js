import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/signin';
import SignUp from '../screens/signup';
import Meds from '../screens/meds';
import AddMeds from '../screens/add';
import { AsyncStorage } from 'react-native';
const RootStack = createStackNavigator();




const RootStackScreen = () => {
    async function _getToken() {
        let token = await AsyncStorage._getItems('authToken');
        console.log(token); 
        return token;
    }
    return(
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name='SignUp' component={SignUp} />
            <RootStack.Screen name='SignIn' component={SignIn} />
            <RootStack.Screen name='Meds' component={Meds} />
            <RootStack.Screen name='AddMeds' component={AddMeds} />         
    </RootStack.Navigator>
    );
}
    


export default RootStackScreen;
    
