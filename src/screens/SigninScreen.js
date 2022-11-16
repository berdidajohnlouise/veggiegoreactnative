import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions,TextInput, Image, TouchableOpacity, Platform, Alert} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import {AuthContext} from '../components/context'

const SignInScreen = ({navigation}) => {

    const [data,setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(val.length != 0 && re.test(String(val).toLowerCase())){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true,
            })
        }else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: true,
            })
        }
    }; 

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val,

        })
    }

    const updateSecureTextentry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const handleValidEmail = (val) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(val).toLowerCase())){
            setData({
                ...data,
                isValidUser: true,
            })
        }
        else{
            setData({
                ...data,
                isValidUser: false,
            })
        }
    }

    const handleValidPassword = (val) => {
        if(val.trim().length > 4){
            setData({
                ...data,
                isValidPassword: true,
            })
        }else{
            setData({
                ...data,
                isValidPassword: false,
            }) 
        }
    }
    const loginHandle = (email,password) => {
        if(data.email.length == 0 && data.password.length == 0){
            Alert.alert('Invalid Input','Email or password cannot be empty',[
                {text: 'Okay'}
            ])
            return;
        }
        signIn(email,password)
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Sign In!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Email Address" 
                    style={styles.textInput} 
                    autoCapitalize="none" 
                    onChangeText={(val)=> textInputChange(val)} 
                    onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}/>
                { data.check_textInputChange ? 
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                : null }
            </View>
            { data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>You must provide valid email address</Text>
                </Animatable.View>
            }
            <Text style={[styles.text_footer],{marginTop: 35}}>Password</Text>
            <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={data.secureTextEntry ? true : false } 
                    style={styles.textInput} 
                    autoCapitalize="none" 
                    onChangeText={(val)=> handlePasswordChange(val)}
                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)} />
                <TouchableOpacity onPress={updateSecureTextentry}>
                { data.secureTextEntry ? 
                    <Feather name="eye-off" color="grey" size={20} />
                : 
                    <Feather name="eye" color="grey" size={20} />
                }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be 4 characters long.</Text>
                </Animatable.View>
            }
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={()=> {loginHandle(data.email,data.password)}}>
                <LinearGradient
                    colors={['#6FCF97', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign,{color: '#fff'}]}>Sign In</Text>

                </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6FCF97'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });