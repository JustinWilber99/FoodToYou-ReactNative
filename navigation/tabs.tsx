import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import Settings from '../screens/Settings';
import Map1 from '../screens/Map1';
import Restaurants from '../screens/TabTwoScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Search"
                component={TabTwoScreen}
                />

            <Tab.Screen
                name="Map"
                component={Map1}
                />

            <Tab.Screen
                name="Settings"
                component={Settings}
                />    
        </Tab.Navigator>
    )
}

export default Tabs;