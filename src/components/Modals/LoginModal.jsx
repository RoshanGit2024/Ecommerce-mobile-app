import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
const LoginModal = ({ openLogin,
    onClose,
    phoneNumber,
    setPhoneNumber,
    showOtp,
    handleChangeOtp,
    setShowOtp,
    otpValue,
    inputRef,
    handleKeyPress,
    setCountryCode,
    countryCode,
    timer,
    handleLogin,
    authenticated
}) => {
    const countryCodes = [
        { label: '+1', value: '+1' },   // USA
        { label: '+91', value: '+91' }, // India
        { label: '+44', value: '+44' }, // UK
        { label: '+61', value: '+61' }, // Australia
    ];
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={openLogin}
            onRequestClose={onClose}
        >
            <View style={styles.containerView}>
                <View style={styles.modalView}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Signup using mobile number</Text>
                    {!showOtp ? (

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
                                <TouchableOpacity onPress={onClose}><Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>Close</Text></TouchableOpacity>
                                {phoneNumber.length == 10 &&
                                    <Button title="continue" onPress={() => {
                                        setShowOtp(true)
                                    }} />}
                            </View>
                        </View>

                    ) : (
                        <View>
                            <Text style={{ fontSize: 18, color: "black" }}>Enter OTP</Text>
                            <View style={styles.otpContainer}>
                                {otpValue.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        value={digit}
                                        onChangeText={(text) => handleChangeOtp(text, index)}
                                        onKeyPress={(event) => handleKeyPress(event, index)}
                                        maxLength={1}
                                        style={[styles.otpInput,authenticated==false && {borderColor:"red"}]}
                                        keyboardType='number-pad'
                                        ref={inputRef[index]}
                                    />
                                ))}
                            </View>
                           {showOtp &&<View style={{ alignItems: 'center', marginVertical: 10 }}>
                               {authenticated==false&&<Text style={{color:"red"}}>invalid otp</Text>}
                                <Text style={{ color: 'black' }}>your otp will expire in:{timer}</Text>
                            </View>}
                            <View style={styles.actionContainer}>
                                <TouchableOpacity onPress={onClose}><Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>Close</Text></TouchableOpacity>
                                {otpValue.length == 4 &&
                                    <Button title="verify" onPress={() => handleLogin(otpValue)} />}
                            </View>
                        </View>
                    )}

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
        justifyContent: "space-between"
    }
});
export default LoginModal;