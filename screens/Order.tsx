import React from "react";
import { Fragment } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Order = ({route,navigation} : {route:any, navigation:any}) => {


    const [restaurant, setRestaurant] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;

        let RestoNum = item.id;
        console.log(item.id);
        console.log(item.menuItem1.name)
        console.log(restaurant?.menuItem1.name)

        setRestaurant(item)
        console.log(item)
 
    })


    function renderMenu() {
        return (
            <View style={styles.container} >

            <View style={{ flexDirection: 'row' }}>

                <View style={{
                    flex: 1,
                    alignItems: 'flex-start',

                }}>
                    <View style={{
                        justifyContent: 'flex-start',
                        paddingHorizontal: 3,
                        backgroundColor: '#65ff75'
                    }}>
                        <Text style={{ fontWeight : 'bold' }}>{restaurant?.name}</Text> {/*error but still works*/}
                        <Text style={{ fontWeight : 'bold' }}>MENU</Text>

                        <Text>-----------------------------------------------</Text>
                        <Text>Name: { restaurant?.menuItem1.name }</Text>
                        <Text>Price: { restaurant?.menuItem1.price }</Text>
                        <Text>Calories: { restaurant?.menuItem1.calories }</Text>
                        <Text>Description: { restaurant?.menuItem1.description }</Text>
                        <Text>-----------------------------------------------</Text>


                        <Text>Name: { restaurant?.menuItem2.name }</Text>
                        <Text>Price: { restaurant?.menuItem2.price }</Text>
                        <Text>Calories: { restaurant?.menuItem2.calories }</Text>
                        <Text>Description: { restaurant?.menuItem2.description }</Text>
                        <Text>-----------------------------------------------</Text>

                    
                        <Text>Name: { restaurant?.menuItem3.name }</Text>
                        <Text>Price: { restaurant?.menuItem3.price }</Text>
                        <Text>Calories: { restaurant?.menuItem3.calories }</Text>
                        <Text>Description: { restaurant?.menuItem3.description }</Text>
                        <Text>-----------------------------------------------</Text>


                        <TouchableOpacity style={styles.loginBtn}>
                            <Button title="RETURN TO MENU" onPress={()=>{

                                navigation.navigate('TabTwoScreen')}
                             }/>
                        </TouchableOpacity>

                    </View>
                </View>

                <TouchableOpacity style={{
                    width: 50,
                    paddingRight: 3,
                    justifyContent: 'center'
                }}>

                    {/*RENDER IMAGE HERE*/}

                </TouchableOpacity>

            </View>
        </View>    
        )
    }


       
       
         return (
           <SafeAreaView style={styles.container}>
             {renderMenu()}
           </SafeAreaView>
         );
       };






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#65ff75",
        marginTop: 10
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0199ff",
      },
})



export default Order;