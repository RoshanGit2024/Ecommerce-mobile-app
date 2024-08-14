import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import products from '../utils/product.json'
import UserIdentity from '../components/Modals/UserIdentity';
//const Tab = createBottomTabNavigator()

const categories = ["Trending Now", "All", "New", "Mens", "Womens"]
const HomeScreen = ({openUserId,setOpenuserId}) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const[isLiked,setIsLiked]=useState([])
    const handleLike = (product)=>{
        if(isLiked.includes(product.id)){
            setIsLiked(isLiked.filter((item)=>item !== product.id));
        }else{
            setIsLiked([...isLiked,product.id])
        }
    }
    const inLikedProduct = (product)=>isLiked.includes(product.id);
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <Text style={styles.MatchText}>Match Your styles</Text>
                        {/* search container */}
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Fontisto name={"search"} size={26} color={"#C0C0C0"} />
                            </View>
                            <TextInput
                                placeholder='search...'
                                style={styles.textInput} />
                        </View>
                        {/* categories section */}
                        <View>
                            <FlatList
                                data={categories}
                                renderItem={({ item }) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
                                keyExtractor={(item) => item}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </>
                }
                data={products}
                renderItem={({item,id})=>
                <ProductCard
                item={item}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                handleLike={handleLike}
                inLikedProduct={inLikedProduct}
                />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom:150
                }}
            />

            {openUserId&&
            <UserIdentity
            openUserId={openUserId}
            setOpenuserId={setOpenuserId}
            />
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    MatchText: {
        fontSize: 28,
        color: "#000000",
        marginTop: 25,
        marginLeft: 10
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginVertical: 20
    },
    textInput: {
        flex: 1,
        borderColor: 'black'
    },
    iconContainer: {
        marginHorizontal: 15,
    }
});
export default HomeScreen;