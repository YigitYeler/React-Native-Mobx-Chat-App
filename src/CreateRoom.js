import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MainStore from './Store/MainStore'

const CreateRoom = () => {

    const [roomName, setRoomName] = useState("");

    const createMyRoom = () => {
        MainStore.createMyRoom(roomName);
        setRoomName("");
    }
    return (

        <SafeAreaView style={style.body}>
            <View style={style.header}>
                <Text style={style.title}>Create Chat Room</Text>
            </View>
            <View style={style.board}>



                <View>
                    <View style={style.item}>
                        <TextInput
                            placeholderTextColor={'#707070'}
                            placeholder={'Room Name'}
                            style={style.input}
                            value={roomName}
                            onChangeText={(text) => setRoomName(text)}
                        />
                    </View>


                    <View style={style.item}>
                        <TouchableOpacity style={style.button} onPress={createMyRoom}>
                            <Text style={style.button_text}>Create Room</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView >

    )
}

const style = StyleSheet.create({
    body: { backgroundColor: '#131214', flex: 1 },
    header: { padding: '4%', justifyContent: "center", alignItems: "center" },
    title: { fontWeight: "500", fontSize: hp('3%'), color: "#6443D4" },
    logo_area: { alignItems: 'center', marginTop: '10%' },
    board: { marginTop: '20%', paddingHorizontal: '8%' },
    item: { marginBottom: '10%' },
    input: { color: '#707070', backgroundColor: '#2A292B', borderRadius: 30, borderColor: '#6443D4', borderWidth: 3, paddingVertical: '3%', paddingHorizontal: '6%' },
    button: { borderRadius: 50, backgroundColor: '#6443D4', paddingVertical: '6%', justifyContent: 'center', alignItems: 'center' },
    button_text: { textAlign: 'center', color: 'white', fontSize: hp('2%'), fontWeight: '700' }
})

export default CreateRoom;
