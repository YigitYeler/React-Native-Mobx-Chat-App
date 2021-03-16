import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const SignUp = (props) => {
    return (
        <SafeAreaView style={style.body}>
            <View style={style.header}>
                <Text style={style.title}>Sign In</Text>
            </View>
            <View style={style.logo_area}>
                <Image style={{ borderColor: '#6443D4', borderWidth: 5, borderRadius: 300, height: hp('17%'), width: wp('30%') }} source={require('../images/Ben.jpeg')}></Image>
            </View>
            <View style={style.board}>



                <View>
                    <View style={style.item}>
                        <TextInput
                            placeholderTextColor={'#707070'}
                            placeholder={'Username'}
                            style={style.input}
                        />
                    </View>
                    <View style={style.item}>
                        <TextInput
                            placeholderTextColor={'#707070'}
                            placeholder={'Email'}
                            style={style.input}
                        />

                    </View>
                    <View style={style.item}>
                        <TextInput
                            placeholderTextColor={'#707070'}
                            placeholder={'Password'}
                            style={style.input}
                            secureTextEntry={true}
                        />

                    </View>

                    <View style={style.item}>
                        <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('Home')}>
                            <Text style={style.button_text}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={{ alignItems: 'center', marginTop: '2%' }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Or</Text>
                </View>
                <View style={style.social}>
                    <TouchableOpacity style={style.social_item}>
                        <Icon name={'facebook-f'} color={'#3b5999'} size={30} ></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.social_item}>
                        <Icon name={'twitter'} color={'#55acee'} size={30} ></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.social_item}>
                        <Icon name={'linkedin'} color={'#0077B5'} size={30} ></Icon>
                    </TouchableOpacity>
                </View>
                <View style={style.item}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: '#525464' }}>Already have an account? <Text style={{ color: '#6443D4', fontWeight: '700' }}>Sign In</Text> </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    body: { backgroundColor: '#131214', flex: 1 },
    header: { padding: '4%', justifyContent: "center", alignItems: "center" },
    title: { fontWeight: "500", fontSize: hp('3%'), color: "#6443D4" },
    logo_area: { alignItems: 'center', marginTop: '5%' },
    board: { marginTop: '10%', paddingHorizontal: '8%' },
    item: { marginBottom: '4%' },
    input: { color: '#707070', backgroundColor: '#2A292B', borderRadius: 30, borderColor: '#6443D4', borderWidth: 3, paddingVertical: '3%', paddingHorizontal: '6%' },
    button: { borderRadius: 50, backgroundColor: '#6443D4', paddingVertical: '6%', justifyContent: 'center', alignItems: 'center' },
    button_text: { textAlign: 'center', color: 'white', fontSize: hp('2%'), fontWeight: '700' },
    social: { flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%', marginBottom: '8%' },
    social_item: { borderRadius: 50, padding: '5%', borderWidth: 2, borderColor: '#6443D4', width: wp('18%'), height: hp('7%'), justifyContent: 'center', alignItems: 'center' }
})

export default SignUp;
