import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import menuData from '../utils/menus.json'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserProfile from '../components/profileComponents/UserProfile';
import ActivityMenu from '../components/profileComponents/ActivityMenu';
import OthersMenu from '../components/profileComponents/OthersMenu';
//const Tab = createBottomTabNavigator()
const ProfileScreen = () => {
    const getLibrary = (library) => {
        switch (library) {
            case 'AntDesign':
                return AntDesign;
            case 'Entypo':
                return Entypo;
            case 'FontAwesome':
                return FontAwesome;
            default:
                return AntDesign;
        }
    }
    return (
        <View style={styles.container}>
            <UserProfile/>
            <ActivityMenu getLibrary={getLibrary}/>
            <OthersMenu getLibrary={getLibrary}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        //flex:1,
        //alignItems:"center",
        //justifyContent:"center",,
        marginHorizontal: 10
    },
    text: {
        fontWeight: "bold",
        fontSize: 72
    },
    userDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginVertical: 10,
    },
    userImage: {
        height: 100,
        width: 100
    },
    nameEmail: {
        marginLeft: 10
    },
});
export default ProfileScreen;