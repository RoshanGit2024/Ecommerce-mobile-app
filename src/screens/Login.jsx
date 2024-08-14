import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
//const Tab = createBottomTabNavigator()
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState("+1")
    const navigation = useNavigation()
    const countryCodes = [
        { label: '+1', value: '+1' },   // USA
        { label: '+91', value: '+91' }, // India
        { label: '+44', value: '+44' }, // UK
        { label: '+61', value: '+61' }, // Australia
    ];

    return (
        <View style={styles.container}>
            <View style={styles.modalView}>
                <Text style={{ fontWeight: "bold", color: "black" }}>Signup using mobile number</Text>


                <View >
                    <View style={styles.phoneNumber}>
                        <Picker
                            selectedValue={countryCode}
                            style={styles.countryCodeStyle}
                            onValueChange={(itemValue) => setCountryCode(itemValue)}
                        >
                            {countryCodes.map((code) => (
                                <Picker.Item key={code.value} label={code.label} value={code.value} />
                            ))}
                        </Picker>
                        <TextInput
                            style={styles.phoneInput}
                            placeholder='Phone Number'
                            keyboardType='phone-pad'
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        {phoneNumber.length == 10 &&
                            <Button title="continue" onPress={() => {
                                navigation.navigate("OTP")
                            }} />}
                    </View>
                </View>

                {/* <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text>user details</Text>
                        <TextInput
                            placeholder='enter your name'
                            style={styles.inputUser}
                        />
                        <View style={styles.genderContainer}>
                            <Text style={{ color: "black", fontSize: "18" }}>Choose Gender</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <Image source={require("../assets/Avatar.png")}
                                    style={styles.userGender}
                                />
                                <Image source={require("../assets/Avatar.png")}
                                    style={styles.userGender}
                                />
                            </View>
                        </View>
                        <TouchableOpacity><Text>close</Text></TouchableOpacity>
                    </View>
                </View> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
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
    phoneNumber: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 15,
        borderWidth: 1,
        height: 55,
        borderRadius: 22,
    },
    countryCodeStyle: {
        height: 40,
        width: 110, // Adjust width based on your UI
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
    },
    phoneInput: {
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 20,
        marginVertical: 10,
        fontSize: 18,
        borderRadius: 20,
        paddingRight: 10
    },
    otpContainer: {
        flexDirection: 'row'
    },
    otpInput: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 5,
        marginVertical: 15,
        paddingHorizontal: 10
    },
    actionContainer: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center"
    }
});
export default Login;