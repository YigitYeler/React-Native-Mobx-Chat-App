import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5'



const Home = (props) => {
    return (
        <View style={[style.pageAll, { flexDirection: 'column', flex: 1 }]}>
            <View style={{ flex: 1 }}>
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
            <View style={{ flex: 4 }}>
                <ScrollView >
                    <View style={style.cards} >
                        <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                            <View style={style.card}>
                                <View style={style.inCard}>
                                    <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                    <View style={style.inCardRoomName}>
                                        <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                        <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                    </View>
                                    <View style={style.inCardDate}>
                                        <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={style.card}>
                            <View style={style.inCard}>
                                <Image style={style.inCardImage} source={require('../images/Ben.jpeg')} />
                                <View style={style.inCardRoomName}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('2.5%') }}>Public Chat</Text>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>Hello</Text>
                                </View>
                                <View style={style.inCardDate}>
                                    <Text style={{ color: '#CECECE', fontSize: hp('1.8%') }}>10.11.2021</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ right: 0, bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp('15%'), width: wp('30%') }}>
                <View style={style.icons}>
                    <TouchableOpacity>
                        <Icon size={40} name={"comment-dots"} color='white' solid />
                    </TouchableOpacity>
                </View>
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
    cards: { alignItems: 'center', padding: '1%', width: wp('100%') },
    card: { height: hp('12%'), width: wp('90%'), borderRadius: 15, backgroundColor: '#414041', marginTop: '3.5%' },
    inCard: { flexDirection: 'row' },
    inCardImage: { height: hp('8%'), width: wp('13%'), borderRadius: 50, marginTop: '3.5%', marginLeft: '5%' },
    inCardRoomName: { marginLeft: '6%', marginTop: '5%' },
    inCardDate: { flexDirection: 'row', marginTop: '5%', justifyContent: 'flex-end', marginLeft: '22%' },
    icons: { marginBottom: '25%', marginRight: '20%', justifyContent: 'center', alignItems: 'center', width: wp('16%'), height: hp('9%'), backgroundColor: '#6443D4', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20 }
})

export default Home;
