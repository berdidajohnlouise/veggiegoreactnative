import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    ImageBackground,
  } from 'react-native';

  import { useTheme } from '@react-navigation/native';
import { Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



const HomeScreen = ({navigation}) => {
  const {colors} = useTheme()
    return(
       // eslint-disable-next-line react-native/no-inline-styles
      //  <View style={styles.container}>
      //   <StatusBar barStyle="default-content"/>
      //    <Text style={{color:colors.text}}>Home Screen</Text>
      //    <Button title="Go to Orders Screen" onPress={()=> navigation.navigate('Details')}/>
      //  </View>
      <ScrollView>
      <View style={styles.daysSales}>
      {/* <StatusBar backgroundColor="#6FCF97" barStyle="default-content"/> */}
        <ImageBackground source={require('../img/bg-img.png')} style={styles.image}>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#219653'}}>₱ 5000.00</Text>
          <View>
            <Text style={{fontSize: 20, fontWeight: '100' }}>Sales of the Day</Text>
          </View>
          <View style={styles.horizontalLine}></View>
        </ImageBackground>

        <View style={styles.orders}>
   

          <View style={[styles.row,{marginTop: 25}]}>
            <View style={{width: 200}}>
              <Text style={{fontSize:22,color: '#fff'}}>Total Orders</Text>
            </View>
            <View style={{textAlign:'left'}}>
              <Text style={{fontSize:21,fontWeight:'bold'}}>5</Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={{width: 200}}>
              <Text style={{fontSize:22,color: '#fff'}}>Delivered</Text>
            </View>
            <View style={{float:'right'}}>
              <Text style={{fontSize:21,fontWeight:'bold'}}>5</Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={{width: 200}}>
              <Text style={{fontSize:22,color: '#fff'}}>Pending</Text>
            </View>
            <View style={{float:'right'}}>
              <Text style={{fontSize:21,fontWeight:'bold'}}>5</Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={{width: 200}}>
              <Text style={{fontSize:22,color: '#fff'}}>In-transit</Text>
            </View>
            <View style={{float:'right'}}>
              <Text style={{fontSize:21,fontWeight:'bold'}}>5</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
        </View>

        <View style={styles.bestSellers}>
            <Text style={{marginTop: 5,marginBottom: 10, fontWeight:'bold'}}>Best Sellers Availability</Text>

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
              <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
            </View>

            <View style={[styles.row]}>
              <View style={{width: 180,height:'auto'}}>
                <Text>Celery</Text>
              </View>
              <View style={{textAlign:'left'}}>
                <Text>5 kg</Text>
              </View>
              <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
            </View>

            <View style={[styles.row]}>
              <View style={{width: 180,height:'auto'}}>
                <Text>Cauliflower</Text>
              </View>
              <View style={{textAlign:'left'}}>
                <Text>5 kg</Text>
              </View>
              <View style={{alignItems:'center',width: 210,height:1,backgroundColor:'#333',position:'absolute',bottom:0}}></View>
            </View>

            <View style={[styles.row]}>
              <View style={{width: 180,height:'auto'}}>
                <Text>Seedless Grapes</Text>
              </View>
              <View style={{textAlign:'left'}}>
                <Text>5 kg</Text>
              </View>
            </View>
           
            <View style={styles.horizontalLine}></View>
        </View>

        <View style={[styles.completion,{paddingBottom:10}]}>
          <Text style={{marginBottom: 5,marginTop: 5,fontWeight: 'bold'}}>Completion</Text>
          <Text style={styles.completionText}>50%</Text>
        </View>
        
      </View>

      </ScrollView>

    );
   };
   

export default HomeScreen;

const styles = StyleSheet.create({
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section:{
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    }, 
    daysSales: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
    },
    orders:{
        paddingTop: 20,
        paddingBottom:30,
        alignItems: 'center',
        backgroundColor: '#6FCF97',
        width: '100%'
    },
    bestSellers:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom: 40,
    },
    completion:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#6FCF97',
        width: '100%'
    },
    completionText:{
      fontSize:40,
      fontWeight: "bold",
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