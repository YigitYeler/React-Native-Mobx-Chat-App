import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth';
import { StackActions, NavigationActions } from 'react-navigation';
import database from '@react-native-firebase/database';
import MainStore from './Store/MainStore';
import { BallIndicator } from 'react-native-indicators'





const Home = (props) => {
    const [wait, setWait] = useState(false);
    const [myRooms, getMyRooms] = useState([]);
    const [userId, setUserId] = useState();

    const listenForChange = () => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                var myRoomsArray;
                setUserId(user.uid);

                database().ref("Rooms").orderByKey().on('child_added', (snapshot) => {
                    //console.log(snapshot.key);

                    //console.log(room.key)
                    for (var i = 0; i < snapshot.val().Users.userIdArray.length; i++) {
                        //console.log(room.val().Users.userIdArray[i])

                        if (userId == snapshot.val().Users.userIdArray[i]) {
                            database().ref("Rooms").child(snapshot.key).orderByKey().on('value', snapshot => {

                                let myRoomsDb = {
                                    roomId: snapshot.key,
                                    roomName: snapshot.val().RoomName
                                }
                                myRoomsArray = myRooms;
                                myRoomsArray.push(myRoomsDb);

                                if (MainStore.filterRoomArray(myRoomsArray)) {
                                    getMyRooms(myRoomsArray)
                                }
                                else {
                                    myRoomsArray.pop();
                                }
                            })
                        }
                    }

                })
            }
        })
    }




    props.navigation.addListener("willFocus", () => {
        if (wait) {
            setWait(false)
        }
    })


    useLayoutEffect(() => {
        listenForChange()
        const delay = setTimeout(() => {
            setWait(true)
        }, 1500)

        return function clearMyInterval() {
            clearInterval(delay)
        }
    })







    /*database().ref("Rooms").orderByKey().on('value', snapshot => {
    
        let myRoomsDb = {
            roomId: snapshot.key,
            roomName: snapshot.val().RoomName
        }
        var myRoomsArray = myRooms;
        myRoomsArray.push(myRoomsDb);
        getMyRooms(myRoomsArray)
    
    })*/

    return (

        <View style={[style.pageAll, { flexDirection: 'column', flex: 1 }]}>
            <View style={{ flex: 4 }}>
                <ScrollView >

                    <View style={style.cards} >
                        {
                            wait ? myRooms.map((room) => {
                                return (
                                    <TouchableOpacity key={room.roomId} onPress={() => {
                                        props.navigation.navigate('Chat', { sendRoomId: room.roomId })
                                    }}>
                                        <View style={style.card} >
                                            <View style={style.inCard}>
                                                <View style={style.inCardRoomName}>
                                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>{room.roomName}</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )

                            }) : <BallIndicator color={"blue"} />
                        }

                    </View>
                </ScrollView>
            </View>
            <View style={{ right: 0, bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp('15%'), width: wp('30%') }}>
                <View style={style.icons}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateAndJoinBottom')}>
                        <Icon size={40} name={"comment-dots"} color='white' solid />
                    </TouchableOpacity>
                </View>
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
    card: { alignSelf: 'flex-start', minHeight: hp('12%'), width: wp('90%'), borderRadius: 15, backgroundColor: '#414041', marginTop: '3.5%' },
    inCard: { flexDirection: 'row' },
    inCardImage: { height: hp('8%'), width: wp('13%'), borderRadius: 50, marginTop: '3.5%', marginLeft: '5%' },
    inCardRoomName: { marginLeft: '6%', marginTop: '5%', width: wp('45%') },
    inCardDate: { flexDirection: 'row', marginTop: '5%', justifyContent: 'flex-end' },
    icons: { marginBottom: '25%', marginRight: '20%', justifyContent: 'center', alignItems: 'center', width: wp('16%'), height: hp('9%'), backgroundColor: '#6443D4', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20 }
})

export default Home;
