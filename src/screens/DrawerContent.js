import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';


import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../components/context'

export function DrawerContent(props){
    // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const paperTheme = useTheme();
    const { signOut,toggleTheme } = React.useContext(AuthContext);
    // const toggleTheme = () => {
    //     setIsDarkTheme(!isDarkTheme);
    // }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../img/logo.jpg')} size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Kentotoy Velasco</Title>
                                <Caption style={styles.caption}>@PMs_CODE</Caption>
                            </View>
                            
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Orders</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>5,000</Paragraph>
                                <Caption style={styles.caption}>Sales</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color,size}) => (
                        <Icon name="ios-home" color={color} size={size}/>
                    )} label="Home" onPress={()=>{props.navigation.navigate('Home')}}/>

                        <DrawerItem icon={({color,size}) => (
                            <Icon name="ios-list-box" color={color} size={size}/>
                        )} label="Orders" onPress={()=>{props.navigation.navigate('Orders')}}/>

                        <DrawerItem icon={({color,size}) => (
                        <Icon name="ios-trending-up" color={color} size={size}/>
                        )} label="Stocks" onPress={()=>{props.navigation.navigate('Stocks')}}/>
                        
                        <DrawerItem icon={({color,size}) => (
                            <Icon name="ios-people" color={color} size={size}/>
                        )} label="Customers" onPress={()=>{props.navigation.navigate('Customers')}}/>

                        <DrawerItem icon={({color,size}) => (
                            <Icon name="ios-cog" color={color} size={size}/>
                        )} label="Settings" onPress={()=>{props.navigation.navigate('Settings')}}/>
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={()=> {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={paperTheme.dark}/>
                                    </View>
                                    
                                </View>
                            </TouchableRipple>
                    </Drawer.Section>
                </View>

                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color,size}) => (
                    <Icon name="ios-exit" color={color} size={size}/>
                )} label="Sign Out" onPress={()=>{signOut()}}/>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });