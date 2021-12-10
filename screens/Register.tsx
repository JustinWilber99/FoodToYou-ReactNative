import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FirstScreen({navigation}:{navigation:any}) {
  return (

    
   <View style={styles.container}>
      <Image
        style={{ width: 500, height: 300 }}
        resizeMode='center'
        source={{ uri: 'https://www.vhv.rs/dpng/d/501-5018364_transparent-register-button-png-register-now-animated-gif.png' }}
      ></Image>
      <Text style={{ fontWeight: 'bold' }}>Register Through our website</Text>
    <TouchableOpacity style={styles.loginBtn}>
        <Button title="RETURN TO LOGIN" onPress={() => {

          navigation.navigate('FirstScreen');
        } } />
      </TouchableOpacity>
      
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
    marginBottom: 40,
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
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#0199ff",
  }
});