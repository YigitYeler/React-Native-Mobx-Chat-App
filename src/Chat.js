import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
                        <View >
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
                            <View style={style.rightMessageTime}>
                                <Text style={style.leftMessageTimeText}>9.30 PM</Text>
                            </View>
                            <View style={style.rightMessage}>
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

                        </View>

                    </View>
                </ScrollView>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'white' }}>sa</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    pageAll: {
        backgroundColor: '#131214', flex: 1, height: hp('100%'), width: wp('100%')
    },
    headerUsers: { flexDirection: 'row' },
    person: { height: hp('12%'), width: wp('18%'), marginTop: '3.5%', marginLeft: 30 },
    images: { height: hp('10%'), width: wp('18%'), borderRadius: 50 },
    leftMessageTime: { left: 30 },
    leftMessageTimeText: { color: '#4B4B4C', marginTop: '2%' },
    leftMessage: { alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', borderTopEndRadius: 100, borderBottomEndRadius: 100, borderBottomLeftRadius: 60, left: 30, backgroundColor: '#D3473B', /*maxWidth: '65%',*/ maxWidth: '65%', minWidth: '30%' },
    messageText: { color: '#CBC8D5', padding: 30, fontSize: 17 },
    rightMessage: { alignItems: 'center', justifyContent: 'center', borderTopStartRadius: 100, borderBottomEndRadius: 100, borderBottomLeftRadius: 100, left: 360, backgroundColor: '#332661', /*maxWidth: '65%',*/ maxWidth: '5%', minWidth: '30%', height: hp('8%') },
    rightMessageTime: { width: wp('10%'), left: 470, marginTop: '2%' }

})

export default Chat;
