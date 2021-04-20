import React, { useState, useLayoutEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import MainStore from './Store/MainStore';
import { BallIndicator } from 'react-native-indicators'

const UsersList = (props) => {
    const [userListState, setUserList] = useState([]);
    const [roomId, setRoomId] = useState("");
    const [wait, setWait] = useState(false);

    const listenForChange = () => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref("Rooms/" + roomId + "/Usernames").orderByKey().on('child_added', (snapshot) => {

                    let comingUserNames
                    if (snapshot.val().username != undefined) {
                        comingUserNames = {
                            username: snapshot.val().username
                        }
                    }
                    else {
                        comingUserNames = {
                            username: snapshot.val().firstUsername
                        }
                    }

                    var userList = userListState;
                    userList.push(comingUserNames);

                    if (MainStore.filterMessagesArray(userList)) {
                        setUserList(userList);
                    }

                })


            }
        })
    }


    useLayoutEffect(() => {
        setRoomId(props.navigation.getParam('sendRoomId'));
        listenForChange();
        const delay = setTimeout(() => {
            setWait(true)
        }, 1000);


        return function clearMyInterval() {
            clearInterval(delay)
        }

    })

    return (
        <View style={[style.pageAll, { flexDirection: 'column', flex: 1 }]}>
            <View style={{ flex: 4 }}>
                <ScrollView >

                    {wait ?
                        userListState.map((item) => {
                            return (<View key={item.username} style={style.cards} >
                                <TouchableOpacity >
                                    <View key={item.key} style={style.card} >
                                        <View style={style.inCard}>
                                            <View style={style.inCardRoomName}>
                                                <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>{item.username}</Text>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>)

                        }) :
                        <BallIndicator color={"blue"} />
                    }

                </ScrollView>
            </View>


        </View >
    )
}
const style = StyleSheet.create({
    pageAll: {
        backgroundColor: '#131214', flex: 1, height: hp('100%'), width: wp('100%')
    },
    headerUsers: { flexDirection: 'row' },
    person: { height: hp('12%'), width: wp('18%'), marginTop: '3.5%', marginLeft: 30 },
    images: { height: hp('10%'), width: wp('18%'), borderRadius: 50 },
    cards: { alignItems: 'center', padding: '1%', width: wp('100%') },
    card: { alignSelf: 'flex-start', minHeight: hp('8%'), width: wp('90%'), borderRadius: 15, backgroundColor: '#414041', marginTop: '3.5%' },
    inCard: { flexDirection: 'row' },
    inCardImage: { height: hp('8%'), width: wp('13%'), borderRadius: 50, marginTop: '3.5%', marginLeft: '5%' },
    inCardRoomName: { marginLeft: '6%', marginTop: '4%', width: wp('45%') },
    inCardDate: { flexDirection: 'row', marginTop: '5%', justifyContent: 'flex-end' },
    icons: { marginBottom: '25%', marginRight: '20%', justifyContent: 'center', alignItems: 'center', width: wp('16%'), height: hp('9%'), backgroundColor: '#6443D4', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20 }
})

export default UsersList;
