import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    ImageBackground,
  } from 'react-native';

// import {Picker} from '@react-native-community/picker'

import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from '@react-navigation/native';
import { Paragraph, TextInput } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';



const StocksInventoryScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container} >
            
                <View style={styles.headerItem}>
                    <Text>Add Item</Text>
                </View>
                <View>
                    <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
                    <View style={styles.row}>
                        <View style={{marginRight: 30}}>
                            <Text style={{marginBottom: 5}}>Item</Text>
                            <TextInput style={{width: 230,height: 30}}/>
                            
                        </View>
                        <View >
                            <Text style={{marginBottom: 5}}>Unit</Text>
                            <TextInput style={{width: 50,height: 30}}/>
                        </View>
                    </View>
                    <View style={[styles.row,{marginTop: 30}]}>
                        <TouchableOpacity style={{marginRight: 150,backgroundColor:'#eee', paddingTop: 5,paddingBottom: 5,paddingLeft: 10, paddingRight: 10,borderColor:'#333',borderWidth:1 }}>
                            <Text><Icon name="close" size={14}/>Clear</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#219653', paddingTop: 5,paddingBottom: 5,paddingLeft: 10, paddingRight: 10,borderColor:'#fff',borderWidth:1 }}>
                            <Text style={{color:'#fff'}}><Icon name="plus" size={16} />Add</Text>
                        </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </View>
            
            </View>
        </ScrollView>
    );
   };
   

export default StocksInventoryScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headerItem:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    image:{
        width: '100%',
        justifyContent: 'flex-start',
        height: 'auto',
        paddingBottom: 30
      },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    

    
});