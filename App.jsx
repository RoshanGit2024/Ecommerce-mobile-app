import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MyOrders from './src/screens/MyOrders';

const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor:'red'
            }}
            >
                <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon:({size,focused,color})=>{
                        return <Entypo name={"home"} size={size} color={color}/>
                    }
                }}
                />
                <Tab.Screen name="Myorders" component={MyOrders}
                options={{
                    tabBarIcon:({size,focused,color})=>{
                        return <FontAwesome6 name={"cubes"} size={size} color={color}/>
                    }
                }}
                />
                <Tab.Screen name="cart" component={CartScreen}
                options={{
                    tabBarIcon:({size,focused,color})=>{
                        return <Entypo name={"shopping-cart"} size={size} color={color}/>
                    }
                }}
                />
                <Tab.Screen name="account" component={ProfileScreen}
                options={{
                    tabBarIcon:({size,focused,color})=>{
                        return <Entypo name={"user"} size={size} color={color}/>
                    }
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  
});
export default App;

