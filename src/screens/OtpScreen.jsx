import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
//const Tab = createBottomTabNavigator()
const OtpScreen = ({setOpenuserId,openUserId}) => {
    const [showOtp, setShowOtp] = useState(false)
    const [otpValue, setOtpValue] = useState(['', '', '', ''])
    const [authenticated, setAuthenticated] = useState(true)
    const [timer, setTimer] = useState(30)
    const inputRef = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const navigation = useNavigation()

    const handleChangeOtp = (text, index) => {
        const newOtp = [...otpValue];
        newOtp[index] = text

        if (text) {
            //move to the other input 
            if (index < 3) {
                inputRef[index + 1].current.focus()
            }
        }
        setOtpValue(newOtp)
    }

    const handleKeyPress = ({ nativeEvent: { key } }, index) => {
        if (key === 'Backspace' && !otpValue[index] && index > 0) {
            inputRef[index - 1].current.focus()
        }
    }

    const handleLogin = (value) => {
        if (value.join('') !== "1234") {
            Alert.alert("otp invalid")
            setAuthenticated(false)
        } else {
            //Alert.alert("login success")
            setAuthenticated(true)
            setOtpValue(['', '', '', ''])
            setTimer(30)
            navigation.navigate("Home")
            Alert.alert("login success")
            setOpenuserId(!openUserId)
        }
    }

    useEffect(() => {
        let intervalId;
        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [showOtp, timer])
    return (
        <View  style={styles.container}>
        <Text style={{ fontSize: 18, color: "black" }}>Enter OTP</Text>
        <View style={styles.otpContainer}>
            {otpValue.map((digit, index) => (
                <TextInput
                    key={index}
                    value={digit}
                    onChangeText={(text) => handleChangeOtp(text, index)}
                    onKeyPress={(event) => handleKeyPress(event, index)}
                    maxLength={1}
                    style={[styles.otpInput, authenticated == false && { borderColor: "red" }]}
                    keyboardType='number-pad'
                    ref={inputRef[index]}
                />
            ))}
        </View>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            {authenticated == false && <Text style={{ color: "red" }}>invalid otp</Text>}
            <Text style={{ color: 'black' }}>your otp will expire in:{timer}</Text>
        </View>
        <View style={styles.actionContainer}>
            {otpValue.length == 4 &&
                <Button title="verify" onPress={() => handleLogin(otpValue)} />}
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
    otpContainer:{
        flexDirection:"row"
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
        justifyContent: "space-between"
    }
});
export default OtpScreen;