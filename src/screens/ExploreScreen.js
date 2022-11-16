import React from 'react'

import {
    View,
Text,
    Button,
    StyleSheet
  } from 'react-native';


const ExploreScreen = ({navigation}) => {
    return(
       // eslint-disable-next-line react-native/no-inline-styles
       <View style={styles.container}>
         <Text>Home Screen</Text>
         <Button title="Go to details Screen" onPress={()=> navigation.navigate('Details')}/>
       </View>
    );
   };
   

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});