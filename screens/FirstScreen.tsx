import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function FirstScreen({navigation}:{navigation:any}) {
  return (

    
    <View style={styles.container}>
      <Text style={styles.bigText}>FoodToYou</Text>
      <Image 
        style={{ width: 400, height:200}}
        resizeMode='center'
        source={{ uri: 'https://static01.nyt.com/images/2020/03/18/nyregion/00NYVIRUS-DELIVERY-04/00NYVIRUS-DELIVERY-04-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}}
       ></Image>
       <View style={styles.medText}>
      <Text>Login To</Text>
      <Text>Get Started!</Text>
      </View>

      <View style={styles.loginBtn}>
      <Button title="Login" onPress={()=>{

          navigation.navigate('TabOneScreen')}
      }/>
      <StatusBar style="auto" />
      </View>

      <View style={styles.loginBtn}>
      <Button title="Register" onPress={()=>{

        navigation.navigate('Register')}
      }/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65ff75",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: 'HoeflerText-BlackItalic',
    fontWeight: 'bold',
  },
 
  image: {
    marginBottom: 20,
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
    fontSize: 32,
    fontFamily: 'ChalkboardSE-Bold',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 20,
    marginTop: 2,
  },

  medText: {
    fontSize: 18,
    fontFamily: 'HoeflerText-BlackItalic',
    fontWeight: 'bold',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    marginTop: 10,
  }
});