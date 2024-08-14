import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import menuData from '../../utils/menus.json'
//const Tab = createBottomTabNavigator()
const ActivityMenu = ({getLibrary}) => {
    const activityMenuRender = ({ item }) => {
        const IconComponent = getLibrary(item.library)
        return (
            <TouchableOpacity>
                <Text style={{ padding: 10, color: 'black' }}><IconComponent name={item.icon} size={20} color={item.color} />  {item.menu}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.menuDetails}>
            <Text style={styles.menuHead}>Activity</Text>
            <FlatList
                data={menuData.activity}
                renderItem={activityMenuRender}
                keyExtractor={(item) => item.id.toString()}
                style={styles.menuItems}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    menuDetails: {
        flexDirection: "column",
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginVertical: 10,
    },
    menuHead: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: "center",
        fontSize: 18,
        marginTop: 20
    },
    menuItems: {
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10
    }
});
export default ActivityMenu;