import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AnimationScreen } from '../screens/AnimationScreen';
import { Animation2Screen } from '../screens/Animation2Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullRefreshScreen } from '../screens/PullRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#536dfe'
        },
        cardStyle: {
          backgroundColor: '#fff'
        },
        animationEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
      <Stack.Screen name="Animation2Screen" component={Animation2Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullRefreshScreen" component={PullRefreshScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
    </Stack.Navigator>
  );
}