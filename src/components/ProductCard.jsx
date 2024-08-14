import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import products from '../utils/product.json'
//const Tab = createBottomTabNavigator()
const ProductCard = ({handleLike,inLikedProduct,item}) => {
        return (
            <View style={styles.container}>
               <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={()=>handleLike(item)} style={styles.likeContainer}>
                    {
                       inLikedProduct(item) ?
                       ( <AntDesign name={"heart"} size={20} color={"red"}/>):
                      ( <AntDesign name={"hearto"} size={20} color={"red"}/>)
                    }  
                </TouchableOpacity>
            </View>
        )
}


const styles = StyleSheet.create({
    container:{
            //flex:1,
            marginHorizontal:10,
            marginTop:10,
            position:"relative"
    },
    productImage:{
            height:256,
            width:"90%",
            borderRadius:20,
            width:167,
            marginVertical:10,
    },
    title:{
           fontSize:18,
           color:"#444444",
           fontWeight:"600",
           fontWeight:"600"
    },
    price:{
        fontSize:18,
        color:"#9C9C9C"
    },
    likeContainer:{
        height:34,
        width:34,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:17,
        position:"absolute",
        top:20,
        right:20
    }
});
export default ProductCard;