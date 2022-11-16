// import React, {Component} from 'react';

// import {StyleSheet, View, StatusBar} from 'react-native';

// import Login from './src/pages/Login';

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#fff" />
//         <Login/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useEffect } from 'react';
import {NavigationContainer,DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import { DrawerContent } from './src/screens/DrawerContent';
import {View, Alert} from 'react-native';

import { AuthContext } from './src/components/context'

import RootStackScreen from './src/screens/RootStackScreen';
import { ActivityIndicator, Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#333',
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333',
      text: '#fff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const loginReducer = (prevState,action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
            ...prevState,
            userToken: action.token,
            isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(email,password) => {
      let userToken;
      userToken = null;
      // if(email == 'user@gmail.com' && password =='password'){
        await fetch('https://veggiego.com/api/v1/login',{
          method: 'get',
        })
        .then((response) => response.json())
        .then(async (json) => {
          await AsyncStorage.setItem('userToken',json.token)
          setUserToken(json.token);
        })
        .catch((error)=>{
          Alert.alert('Invalid User!', 'Username or password is incorrect');
        })
    },
    signOut: async() => {

      try{
        await AsyncStorage.removeItem('userToken')
      }catch(e){
        console.log(e)
      }
      dispatch({type: 'LOGOUT'})
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme=> !isDarkTheme)
    }
  }), []);
  
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false)
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000);
  },[]);

  if(loginState.isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#333"/>
      </View>
    );
  }
  return(
    <PaperProvider theme={theme}>
     <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.userToken != null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        </Drawer.Navigator>
        ): <RootStackScreen/> 
        
        }
      </NavigationContainer>
     </AuthContext.Provider>
     </PaperProvider>
  );
 };

export default App;