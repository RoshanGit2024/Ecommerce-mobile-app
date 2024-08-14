import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
//const Tab = createBottomTabNavigator()
const UserProfile = () => {
    return (
        <View style={styles.userDetails}>
            <Image source={require("../../assets/Avatar.png")} style={styles.userImage} />
            <View style={styles.nameEmail}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>User name</Text>
                <Text>email@gmail.com</Text>
            </View>
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
    }
});
export default UserProfile;