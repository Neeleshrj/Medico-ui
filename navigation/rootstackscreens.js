import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/signin';
import SignUp from '../screens/signup';
import Meds from '../screens/meds';
import AddMeds from '../screens/add';
import Loading from '../screens/loading';

const RootStack = createStackNavigator();


const RootStackScreen = () => {
    
    return(
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name='Loading' component={Loading} />
            <RootStack.Screen name='SignIn' component={SignIn} />
            <RootStack.Screen name='SignUp' component={SignUp} />
            <RootStack.Screen name='Meds' component={Meds} />
            <RootStack.Screen name='AddMeds' component={AddMeds} />
        </RootStack.Navigator>
    );  
};
    


export default RootStackScreen;
    
