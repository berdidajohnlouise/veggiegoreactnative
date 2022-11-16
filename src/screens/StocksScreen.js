import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const StocksScreen = ({navigation}) => {
    return(
      
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.push('StocksInventory')}>
        <View style={[styles.list,{marginTop: 2}]}>
          <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
            <Text style={styles.text}>Inventory</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
        <View style={[styles.list,styles.nMarginTop]}>
          <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
            <Text style={styles.text}>Pricelist</Text>
          </ImageBackground>
        </View>
      
      </View>
    );
};

export default StocksScreen;

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