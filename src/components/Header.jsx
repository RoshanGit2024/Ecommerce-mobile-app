import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoginModal from './Modals/LoginModal';
import UserIdentity from './Modals/UserIdentity';
//const Tab = createBottomTabNavigator()
const Header = () => {
    const[openLogin,setOpenLogin]=useState(false)
    const[openUserId,setOpenuserId]=useState(false)
    const[phoneNumber,setPhoneNumber]=useState("")
    const[countryCode,setCountryCode]=useState("+1")
    const [showOtp, setShowOtp] = useState(false)
    const[otpValue,setOtpValue]=useState(['','','',''])
    const [authenticated,setAuthenticated]=useState(true)
    const[timer,setTimer]=useState(30)
    const inputRef = [useRef(null),useRef(null),useRef(null),useRef(null)]

    const handleChangeOtp = (text,index)=>{
        const newOtp = [...otpValue];
        newOtp[index]=text

        if(text){
            //move to the other input 
            if(index < 3){
              inputRef[index + 1].current.focus()
            }
        }
        setOtpValue(newOtp)
    }

    const handleKeyPress =({nativeEvent:{key}},index)=>{
       if(key === 'Backspace' && !otpValue[index] && index > 0){
        inputRef[index - 1].current.focus()
       }
    }

    useEffect(()=>{
        let intervalId;
        if(showOtp && timer > 0){
             intervalId = setInterval(()=>{
             setTimer(prevTimer => prevTimer - 1 )
            },1000)
            return ()=>clearInterval(intervalId)
        }
    },[showOtp,timer])

    const handleLogin =(value)=>{
        if(value.join('') !== "1234"){
            Alert.alert("otp invalid")
            setAuthenticated(false)
        }else{
            //Alert.alert("login success")
            setAuthenticated(true)
            console.log(authenticated)
            console.log(otpValue)
            setOpenLogin(false)
            setOtpValue(['','','',''])
            setShowOtp(false)
            setTimer(30)
            setPhoneNumber("")
            setOpenuserId(true)
        }
    }

    const handleOpenProfile=()=>{
        if(authenticated){
            setOpenuserId(true)
        }else{
            setOpenLogin(true)
        }
    }
    return (
        <View style={styles.container}>
             <View style={styles.appIconContainer}>
                <Image source={require("../assets/ecommerceIcon.webp")} style={styles.appIcon}/>
             </View>
             <View style={{flexDirection:'row'}}>
                <View style={styles.likedContainer}>
                  <AntDesign name={"heart"} size={25} color={"red"} style={styles.headerHeart}/>
                </View>
              <TouchableOpacity onPress={handleOpenProfile}>
                <Image source={require("../assets/Avatar.png")} 
                style={styles.dp}
                />
              </TouchableOpacity> 
             </View>
            <LoginModal
            openLogin={openLogin}
            onClose={()=>{
                setOpenLogin(false)
                setShowOtp(!showOtp)
                setOtpValue(['','','',''])
                setPhoneNumber("")
                setTimer(30)
            }}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            showOtp={showOtp}
            handleChangeOtp={handleChangeOtp}
            setShowOtp={setShowOtp}
            otpValue={otpValue}
            inputRef={inputRef}
            handleKeyPress={handleKeyPress}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            timer={timer}
            handleLogin={handleLogin}
            setTimer={setTimer}
            authenticated={authenticated}
            />
            <UserIdentity
            openLogin={openUserId}
            onClose={()=>setOpenuserId(!openUserId)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        //flex:1,
        flexDirection:"row",
        padding:20,
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:0
    },
    appIconContainer:{
        backgroundColor:"#FFFFFF",
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center'
    },
    appIcon:{
        height:28,
        width:28
    },
    dp:{
        height:44,
        width:44,
        borderRadius:22  
    },
    headerHeart:{
        height:28,
        width:28
    },
    likedContainer:{
        //backgroundColor:"#FFFFFF",
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    }
});
export default Header;