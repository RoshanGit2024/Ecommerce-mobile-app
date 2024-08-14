import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserIdentity from './Modals/UserIdentity';
import { useNavigation } from '@react-navigation/native';
//const Tab = createBottomTabNavigator()
const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.appIconContainer}>
                <Image source={require("../assets/ecommerceIcon.webp")} style={styles.appIcon} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.likedContainer}>
                    <AntDesign name={"heart"} size={25} color={"red"} style={styles.headerHeart} />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                    <Image source={require("../assets/Avatar.png")}
                        style={styles.dp}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 0
    },
    appIconContainer: {
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        height: 28,
        width: 28
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    headerHeart: {
        height: 28,
        width: 28
    },
    likedContainer: {
        //backgroundColor:"#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
});
export default Header;