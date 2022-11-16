import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

import OrdersScreen from './OrdersScreen';
import TodaysOrderScreen from './TodaysOrderScreen';
import AddOrderScreen from './AddOrderScreen';
import OrdersSummaryScreen from './OrdersSummaryScreen'

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';


import StocksScreen from './StocksScreen';
import StocksInventoryScreen from './StocksInventoryScreen';

import moment from 'moment';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const StockStack = createStackNavigator()


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#027400"
      barStyle={{ backgroundColor: '#fff' }}
      inactiveBackgroundColor="#000"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-list-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Stocks"
        component={StocksStackScreen}
        options={{
        //   tabBarLabel: 'Stocks',
          title: 'Stocks',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-trending-up" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Customer"
        component={StocksStackScreen}
        options={{
        //   tabBarLabel: 'Customers',
          title: 'Customers',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cog" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>

);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
 
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#6FCF97',
      },
      headerTintColor: '#333',
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Home',
        headerTitleAlign:'center',
        headerRight: () => (
          // <Icon.Button name="ios-menu" size={30} backgroundColor="#6FCF97" color="#333"
          // onPress={ () => navigation.openDrawer()}
          // ></Icon.Button>
          <Text style={{marginRight: 10}}>{moment().format('MMMM DD, YYYY')}</Text>
        ),
        }} />
    </HomeStack.Navigator>
);


const OrdersStackScreen = ({navigation}) => (
  <OrderStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#6FCF97',
    },
    headerTintColor: '#333',
   
  }}>
    <OrderStack.Screen name="Orders" component={OrdersScreen} options={{
        title: 'Orders',
        headerTitleAlign:'center',
        // headerRight: () => (
        //   // <Icon.Button name="ios-menu" size={30} backgroundColor="#009387"
        //   // onPress={ () => navigation.openDrawer()}
        //   // ></Icon.Button>
        // ),
        }} />
    <OrderStack.Screen name="TodaysOrder" component={TodaysOrderScreen} options={{
        title: 'Orders',
        headerRight: () => (
          <Text style={{fontSize: 20, marginRight: 30}}>
            Today
          </Text>
        ),
        }} />

    <OrderStack.Screen name="OrdersSummary" component={OrdersSummaryScreen} options={{
            title: 'Orders',
            headerRight: () => (
              <Text style={{fontSize: 20, marginRight: 30}}>
                Summary of Orders
              </Text>
            ),
            }} />

    <OrderStack.Screen name="AddOrder" component={AddOrderScreen} options={{
            title: 'Orders',
            headerRight: () => (
              <Text style={{fontSize: 20, marginRight: 30}}>
                Add Order
              </Text>
            ),
            }} />
  </OrderStack.Navigator>
);



const StocksStackScreen = ({navigation}) => (
    <StockStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#6FCF97',
      },
      headerTintColor: '#333',
    }}>
      <StockStack.Screen name="Stocks" component={StocksScreen} options={{
          title: 'Stocks',
          headerTitleAlign:'center',
          }} />

      <StockStack.Screen name="StocksInventory" component={StocksInventoryScreen} options={{
          title: 'Stocks',
          headerRight: () => (
            <Text style={{fontSize: 20, marginRight: 30}}>
                Inventory
            </Text>
          ),
          }} />
    </StockStack.Navigator>
  );

  const ExploreStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <DetailsStack.Screen name="Details" component={ExploreScreen} options={{
          title: 'Details',
          headerRight: () => (
            <Icon.Button name="ios-menu" size={30} backgroundColor="#009387"
            onPress={ () => navigation.openDrawer()}
            ></Icon.Button>
          ),
          }} />
    </DetailsStack.Navigator>
  );
