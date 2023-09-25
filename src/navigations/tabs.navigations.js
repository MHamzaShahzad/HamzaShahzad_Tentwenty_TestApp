import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import MainStackNavigator from './stack.navigation';

import Screens from '../screen';
import Constants from '../utils/constants';


const Tab = createMaterialBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={Constants.NavigationItems.UpcomingMoviesScreen}
      >
      <Tab.Screen
        name={Constants.NavigationItems.UpcomingMoviesScreen}
        component={MainStackNavigator}
        options={{
          title: 'Watch',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="tv" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={Constants.NavigationItems.SearchMoviesScreen}
        component={Screens.SearchMoviesScreen}
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
