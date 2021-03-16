/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

//import Chat from './Chat';
import Home from './Home';
import Chat from './Chat';

const MyApp = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: { headerShown: false }
    },
    Chat: {
        screen: Chat,
        navigationOptions: { headerShown: false }
    }

})

export default createAppContainer(MyApp);