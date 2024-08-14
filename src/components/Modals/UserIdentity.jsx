import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Modal, TextInput, Button, Image } from 'react-native';
const UserIdentity = ({openLogin,onClose}) => {

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={openLogin}
            onRequestClose={onClose}
        >
            <View style={styles.containerView}>
                <View style={styles.modalView}>
                <Text>user details</Text>
                <TextInput
                placeholder='enter your name'
                style={styles.inputUser}
                />
                <View style={styles.genderContainer}>
                    <Text style={{color:"black",fontSize:"18"}}>Choose Gender</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                <Image source={require("../../assets/Avatar.png")} 
                style={styles.userGender}
                />
                <Image source={require("../../assets/Avatar.png")} 
                style={styles.userGender}
                />
                </View>
                </View>
                <TouchableOpacity onPress={onClose}><Text>close</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 40,
        width: "90%"
    },
    inputUser:{
        height:40,
        borderWidth:1,
        borderColor:"gray",
        marginTop:10,
        borderRadius:22
    },
    genderContainer:{
        flexDirection:"column",
        justifyContent:"space-between"
    },
    userGender:{
        height:90,
        width:90,
        borderRadius:22  
    }
});
export default UserIdentity;