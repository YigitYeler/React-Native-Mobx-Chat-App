/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

//import Chat from './Chat';
import Home from './Home';
import Chat from './Chat';
import Login from './Login';
import SignUp from './SignUp';








var MyApp = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: { headerShown: false }
    },
    Login: {
        screen: Login,
        navigationOptions: { headerShown: false },
    },
    Home: {
        screen: Home,
        navigationOptions: { headerShown: false },
    },
    Chat: {
        screen: Chat,
        navigationOptions: { headerShown: false },
    }


})






export default createAppContainer(MyApp);





