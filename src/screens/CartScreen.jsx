import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
//const Tab = createBottomTabNavigator()
const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>cart screen</Text>
            <AntDesign name="stepforward"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontWeight:"bold",
        fontSize:72
    }
});
export default CartScreen;