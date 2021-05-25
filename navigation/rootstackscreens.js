import React,{setState, useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/signin';
import SignUp from '../screens/signup';
import Meds from '../screens/meds';
import AddMeds from '../screens/add';
import { AsyncStorage } from 'react-native';
const RootStack = createStackNavigator();


const RootStackScreen = () => {
    async function getToken(){
        return AsyncStorage.getItem('authToken');
    }

    return(
        <RootStack.Navigator headerMode="none">
        {getToken() == null ? (
        <>
            <RootStack.Screen name='SignIn' component={SignIn} />
            <RootStack.Screen name='SignUp' component={SignUp} />
            <RootStack.Screen name='Meds' component={Meds} />
            <RootStack.Screen name='AddMeds' component={AddMeds} />
        </>
        ) : (
        <>
            <RootStack.Screen name='Meds' component={Meds} />
            <RootStack.Screen name='AddMeds' component={AddMeds} />
            <RootStack.Screen name='SignIn' component={SignIn} />
            <RootStack.Screen name='SignUp' component={SignUp} />
        </>
        )
        }
        </RootStack.Navigator>
    );  
};
    


export default RootStackScreen;
    
