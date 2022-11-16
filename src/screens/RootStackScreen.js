import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SigninScreen from './SigninScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigatation})=>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SigninScreen" component={SigninScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
