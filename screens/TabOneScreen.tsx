import * as React from 'react';
import { Button, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import {NavigationContainer} from '@react-navigation/native';
import { Fragment } from 'react';
import { useState } from 'react';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment>
      
    <View style={styles.container}>
      <Image 
        style={{ width: 250, height:400 }}
        resizeMode='center' 
        source={{ uri: 'https://spwww.sccpss.com/PublishingImages/login1.png'}}
       ></Image>
      </View>
    
    <View style={styles.container}>
      
      <Text style={{fontWeight: 'bold', fontSize: 28}}>Welcome Back!</Text>
    </View>

      <View style={styles.container}>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your E-Mail"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
        <Button title="Login" onPress={()=>{

          navigation.navigate('TabTwoScreen')}
          }/>
      </TouchableOpacity>
      </View>

      </Fragment>
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
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
 
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
    marginBottom: 1,
    marginTop: 5,
  },

  HeaderBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#0199ff",
  },
});