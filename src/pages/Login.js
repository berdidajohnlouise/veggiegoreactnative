import React, {Component} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

export default class Login extends Component<{}> {
  render() {

    return (
      <View style={styles.container}>
        <Logo/>
        <LoginForm/>
        <View style={styles.copyRight}>
           <Text>Copyright © 2020 VeggieGoDelivery</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyRight: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     position: 'absolute',
     bottom: 50,
  }
});
