import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import 'react-native-gesture-handler';

import FirstScreen from './screens/FirstScreen';
import TabOneScreen from './screens/TabOneScreen';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Fragment } from 'react';
import TabTwoScreen from './screens/TabTwoScreen';
import Tabs from './navigation/tabs';
import Order from './screens/Order';
import Register from './screens/Register';
import Map1 from './screens/Map1';


const Stack=createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen // Tell the user to login

          name="FirstScreen"
          component={FirstScreen} />

        <Stack.Screen // Have the user actually login

          name="TabOneScreen"
          component={TabOneScreen}
          />

        <Stack.Screen // Logged in, main screen of the app

          name="TabTwoScreen"
          component={Tabs}
          options={{ title: "TabTwoScreen" }} />

        <Stack.Screen // Logged in, chose a restaurant

          name="Order"
          component={Order}
          options={{ title: "Order" }} />

        <Stack.Screen // Send to Register screen

          name="Register"
          component={Register}
          options={{ title: "Register" }} />

        <Stack.Screen // Send to Register screen

          name="Map1"
          component={Map1}
          options={{ title: "Register" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  HeaderBtn: {
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
    marginTop: 20,
    backgroundColor: "#FF1493",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 30
  },
});