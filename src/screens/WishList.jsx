import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import menuData from '../../utils/menus.json'
//const Tab = createBottomTabNavigator()
const ActivityMenu = ({getLibrary}) => {
    return (
        <View style={styles.menuDetails}>
            <Text style={styles.menuHead}>Login</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
});
export default ActivityMenu;