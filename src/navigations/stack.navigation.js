import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Screens from '../screen';
import Constants from '../utils/constants';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Constants.NavigationItems.UpcomingMoviesScreen}
        component={Screens.UpcomingMoviesScreen}
        options={{headerShown: true, headerTitle: 'Watch'}}
      />
      <Stack.Screen
        name={Constants.NavigationItems.DetailMoviesScreen}
        component={Screens.DetailMoviesScreen}
        options={{headerShown: true, headerTitle: 'Watch'}}
        
      />
      <Stack.Screen
        name={Constants.NavigationItems.SearchMoviesScreen}
        component={Screens.SearchMoviesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Constants.NavigationItems.SeatBookingScreen}
        component={Screens.SeatBookingScreen}
        // options={{headerShown: true, }}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
