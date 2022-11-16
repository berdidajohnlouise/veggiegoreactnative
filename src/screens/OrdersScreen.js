import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground,
    Dimensions
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const OrdersScreen = ({navigation}) => {
    return(
       // eslint-disable-next-line react-native/no-inline-styles
      //  <View style={styles.container}>
      //    <Text>Details Screen</Text>
      //    <Button title="Go to details Screen again" onPress={()=> navigation.push('Details')}/>
      //    <Button title="Go to Home Screen" onPress={()=> navigation.navigate('Home')}/>
      //    <Button title="Go Back" onPress={()=> navigation.goBack()}/>
      //  </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.push('TodaysOrder')}>
        <View style={[styles.list,{marginTop: 5}]}>
          <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
            <Text style={styles.text}>Today</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
        <View style={[styles.list,styles.nMarginTop]}>
          <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
            <Text style={styles.text}>Tomorrow</Text>
          </ImageBackground>
        </View>
        <View style={[styles.list,styles.nMarginTop]}>
          <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
            <Text style={styles.text}>Pre-Orders</Text>
          </ImageBackground>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.push('OrdersSummary')} style={styles.nMarginTop}>
          <View style={[styles.list,styles.nMarginTop]}>
            <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
              <Text style={styles.text}>Summary of Orders</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <View style={{position:'absolute',right: 20, bottom: 20,zIndex:100}}>
          <TouchableOpacity
            style={{
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              alignItems:'center',
              justifyContent:'center',
              width:60,
              height:60,
              backgroundColor:'#219653',
              borderRadius:50,
              }}

              onPress={()=>navigation.push('AddOrder')}
          >
            <Icon name="plus"  size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        // alignItems: 'center',
        justifyContent: 'flex-start'
    },
    list:{
        height: 100,
        textAlign: 'left',
    },
    nMarginTop:{
      marginTop: -11,
    },
    text:{
      marginTop: 25,
      marginBottom: 25,
      marginLeft: 20,
      fontSize: 28,
      fontWeight: '100',
      color: '#333'
    },  
    image:{
      height: 'auto',
    },
});