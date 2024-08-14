import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  const categoryColors = {
    'Trending Now': '#FF6F61',
    'All': '#6B5B95',
    'New': '#88B04B',
    'Mens': '#FF6F61',
    'Womens': '#FF1493',
  };

  const getCategoryColor =(category)=>{
    return categoryColors[category] || '#DFDCDC'
  }

  const getCategoryTextColor=(category)=>{
    return categoryColors[category] ? "#FFFFFF":"#938F8F"
  }
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <View>
        <Text style={[styles.categoryText, selectedCategory === item && { color: getCategoryTextColor(item), backgroundColor: getCategoryColor(item) }]}>{item}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Category
const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    //color:"#FFFFFF",
    color: "#938F8F",
    //backgroundColor:"red",
    backgroundColor: "#DFDCDC",
    textAlign: "center",
    borderRadius: 22,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})
