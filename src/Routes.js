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
import { createBottomTabNavigator } from 'react-navigation-tabs'
import auth from '@react-native-firebase/auth';

//import Chat from './Chat';
import Home from './Home';
import Chat from './Chat';
import Login from './Login';
import SignUp from './SignUp';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Logout from './Logout';

const CreateAndJoinBottom = createBottomTabNavigator(
    {
        CreateRoom: { screen: CreateRoom },

        JoinRoom: {
            screen: JoinRoom
        },
        Logout: {
            screen: Logout
        }
    },

    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            activeBackgroundColor: '#6443D4',
            inactiveBackgroundColor: '#131214'
        }
    }

)

const MyApp = createStackNavigator({
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
    },
    CreateAndJoinBottom: {
        screen: CreateAndJoinBottom,
        navigationOptions: { headerShown: false }
    }


})






export default createAppContainer(MyApp);





