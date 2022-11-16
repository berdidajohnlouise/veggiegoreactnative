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

import { useTheme } from '@react-navigation/native';
import { Paragraph } from 'react-native-paper';

import DatePicker from 'react-native-datepicker';
import { color } from 'react-native-reanimated';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const OrdersSummaryScreen = ({navigation}) => {
    const [data,setData] = React.useState({
        date: new Date()
    })
    return(
        <ScrollView>
        <View style={styles.container} >
            <ImageBackground source={require('../img/bg-img.png')} style={styles.bgImage}>
                <Text style={{fontSize: 22, fontWeight: '400', paddingTop:10}}>Date</Text>
                <DatePicker
                style={{width: 250, backgroundColor: '#fff',marginTop:5}}
                date={data.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 0,
                    color: '#fff'
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {setData({
                    ...data,
                    date:date
                })}}
            />
            </ImageBackground>
            <View style={[styles.bestSeller,{marginTop: 10}]}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Best Sellers</Text>

                <View style={[styles.row,{marginTop: 4}]}>
                    <View style={{width: 180,height:'auto'}}>
                        <Text style={{fontWeight:'bold'}}>Item</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text style={{fontWeight:'bold'}}>Qty</Text>
                    </View>
                </View>

                <View style={[styles.row,{marginTop: 5}]}>
                    <View style={{width: 180}}>
                        <Text>Lettuce</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row]}>
                    <View style={{width: 180,height:'auto'}}>
                        <Text>Brocolli</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                </View>

                <View style={[styles.row]}>
                    <View style={{width: 170,height:'auto'}}>
                        <Text></Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 pcs</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginBottom:30}]}>
                    <View style={{width: 180,height:'auto'}}>
                        <Text>Celery</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            <View style={styles.assorted}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Assorted</Text>
                <View style={[styles.row,{marginTop: 4}]}>
                    <View style={{width: 180,height:'auto'}}>
                        <Text style={{fontWeight:'bold'}}>Item</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text style={{fontWeight:'bold'}}>Qty</Text>
                    </View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Beans</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>15 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Alugbati</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>10 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>N.Pechay</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>C.Pechay</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Kalbasa</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Ampalaya</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>N.Pechay</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>C.Pechay</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Kalbasa</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20}]}>
                    <View style={{width: 180}}>
                        <Text>Ampalaya</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>5 kg</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <TouchableOpacity style={styles.seeMoreBtn}>
                    <Text style={{color: '#fff'}}>See More</Text>
                </TouchableOpacity>
                <View style={styles.horizontalLine}></View>
            </View>


            <View style={styles.fruits}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Fruits</Text>

                <View style={[styles.row,{marginTop: 5}]}>
                    <View style={{width: 180,height:'auto'}}>
                        <Text style={{fontWeight:'bold'}}>Item</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text style={{fontWeight:'bold'}}>Qty</Text>
                    </View>
                </View>

                <View style={[styles.row,{marginTop: 10}]}>
                    <View style={{width: 180}}>
                        <Text>Watermelon</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>1 pc</Text>
                    </View>
                    <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
                </View>

                <View style={[styles.row,{marginTop: 20, marginBottom: 100}]}>
                    <View style={{width: 180}}>
                        <Text>Banana Lacatan</Text>
                    </View>
                    <View style={{textAlign:'left'}}>
                        <Text>1 sipi</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    );
   };
   

export default OrdersSummaryScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    seeMoreBtn: {
        backgroundColor: '#219653',
        paddingLeft: 30, 
        paddingRight: 30,
        paddingTop: 5, 
        paddingBottom: 5,
        marginTop: 30, 
        marginBottom: 30
        // border: '1px solid #000'
    },
    bgImage:{
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-start',
        height: 100,
    },
    bestSeller:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    assorted:{
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: '#eee'
    },
    fruits:{
        alignItems: 'center',
        justifyContent:'flex-start',
    }  ,
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontalLine:{
        alignItems:'center', 
        justifyContent: 'flex-end', 
        width: 150, 
        height: 2, 
        backgroundColor: '#219653', 
        position:'absolute',
        bottom:0
      }

    
});