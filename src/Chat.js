import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Chat = () => {
    return (
        <View style={[style.pageAll, { flexDirection: 'column', flex: 1 }]}>
            <View style={{ flex: 1.8 }}>
                <ScrollView
                    style={style.headerUsers}
                    horizontal
                >
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                    <View style={style.person}>
                        <Image style={style.images} source={require('../images/Ben.jpeg')} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Yiğit</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{ flex: 8 }}>
                <ScrollView>
                    <View style={{ marginTop: '10%' }}>
                        <View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View>
                        <View style={style.rightMessagePosition} >
                            <View style={style.rightMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.rightMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View>


                        <View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View><View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View><View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View>
                        <View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>
                                <Text style={style.messageText}>
                                    Hello
                            </Text>
                            </View>
                        </View>
                        <View >
                            <View style={style.leftMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.leftMessage}>

                                <Text style={style.messageText}>
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                    Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                            </Text>
                            </View>
                            <View style={style.rightMessagePosition} >
                                <View style={style.rightMessageTime}>
                                    <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                                </View>
                                <View style={style.rightMessage}>
                                    <Text style={style.messageText}>
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                                        Helloghdfghdfghdfghfdhdfhgdghjfghjfgjhfg
                            </Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </ScrollView>

            </View>
            <View style={{ flex: 1.2 }}>
                <View style={style.textInputView}>
                    <TextInput style={{ height: hp('7.8%'), color: '#707070', paddingHorizontal: 20, paddingRight: '18%' }} placeholder={'Your Message..'} placeholderTextColor={'#707070'} />

                    <TouchableOpacity style={style.sendMessage}>
                        <View >

                            <Icon size={20} name={"paper-plane"} color='white' solid />

                        </View>
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
    leftMessageTime: { left: 20 },
    leftMessageTimeText: { color: '#4B4B4C', marginTop: '2%' },
    leftMessage: { alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', borderTopEndRadius: 80, borderBottomEndRadius: 80, borderBottomLeftRadius: 60, left: 20, backgroundColor: '#D3473B', /*maxWidth: '65%',*/ maxWidth: '65%', minWidth: '30%' },
    messageText: { color: '#CBC8D5', padding: 30, fontSize: 17 },
    rightMessage: { alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', borderTopStartRadius: 80, borderBottomEndRadius: 60, borderBottomLeftRadius: 80, right: 0, backgroundColor: '#332661', maxWidth: '65%', minWidth: '30%' },
    rightMessagePosition: { alignItems: 'flex-end', width: wp('100%'), right: 15 },
    rightMessageTime: { alignItems: 'flex-end', width: wp('100%'), marginTop: '2%' },
    textInputView: { backgroundColor: '#2A292B', borderRadius: 50, margin: '3%' },
    sendMessage: { backgroundColor: '#5338B0', position: 'absolute', borderRadius: 100, width: wp('12%'), height: hp('6%'), alignItems: 'center', justifyContent: 'center', right: 6, top: 7, right: 10 }

})

export default Chat;
