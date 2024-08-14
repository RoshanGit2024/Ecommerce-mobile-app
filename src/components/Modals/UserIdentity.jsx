import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Modal, TextInput, Button, Image } from 'react-native';
const UserIdentity = ({ openUserId, setOpenuserId }) => {

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={openUserId}
            onRequestClose={() => setOpenuserId(!openUserId)}
        >

            <View style={styles.containerView}>
                <View style={styles.modalView}>
                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>user details</Text>
                    <TextInput
                        placeholder='enter your name'
                        style={styles.inputUser}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <View style={styles.box}>
                           <TouchableOpacity onPress={()=>setOpenuserId(!openUserId)}><Image source={require("../../assets/Avatar.png")}
                                style={styles.userGender}
                            /></TouchableOpacity> 
                            <Text style={{ textAlign: "center", marginTop: 10 }}>male</Text>
                        </View>
                        <View>
                        <TouchableOpacity onPress={()=>setOpenuserId(!openUserId)}><Image source={require("../../assets/Avatar2.png")}
                                style={styles.userGender}
                            /></TouchableOpacity>
                            <Text style={{ textAlign: "center", marginTop: 10 }}>Female</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setOpenuserId(!openUserId)}><Text style={{ color: "red", fontWeight: "bold", marginTop: 10, textAlign: "center" }}>close</Text></TouchableOpacity>
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
    inputUser: {
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 10,
        borderRadius: 22
    },
    genderContainer: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    userGender: {
        height: 90,
        width: 90,
        backgroundColor:"#CB0209",
        borderRadius: 22
    },
    box: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Android shadow (elevation)
        elevation: 5,
    }
});
export default UserIdentity;