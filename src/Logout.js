import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0, // <-- currect active route from actions array
    actions: [
        NavigationActions.navigate({ routeName: 'SignUp' }),
    ],
});

const Logout = (props) => {


    const signOut = () => {
        auth().signOut().then(() => {
            // Sign-out successful.
            props.navigation.dispatch(resetAction);
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <SafeAreaView style={style.body}>
            <View style={style.View}>
                <TouchableOpacity onPress={signOut}>
                    <View>
                        <Icon name={"sign-out-alt"} color={"white"} size={70} />
                        <Text style={{ color: 'white', fontSize: hp("3%") }}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView >

    )
}

const style = StyleSheet.create({
    body: { backgroundColor: '#131214', flex: 1 },
    View: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

export default Logout;
