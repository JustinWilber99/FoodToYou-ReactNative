import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function Map1({navigation}:{navigation:any}) {
  return (

    
    <View style={styles.container}>
      <Image 
        style={{ width: 300, height:400}}
        resizeMode='center'
        source={{ uri: 'https://t4.ftcdn.net/jpg/02/59/49/93/360_F_259499366_ytGqXw4RgHBUHBteftXKtpqTs6qiscIh.jpg'}}
       ></Image>
      <Text style ={styles.bigText}>Map Features Coming</Text>
      <Text style ={styles.bigText}>In Version 2.0!</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65ff75",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: '#65ff75'
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 30
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

  bigText: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'ChalkboardSE-Bold',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 30,
    marginTop: 2,
  },
});
