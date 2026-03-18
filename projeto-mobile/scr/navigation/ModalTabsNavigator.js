import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomModalScreen from '../../CustomModalScreen';

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#1f1f1f' },
      }}
    >
      <Tab.Screen
        name="Modal Slide"
        options={{ tabBarLabel: 'Slide' }}
      >
        {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />}
      </Tab.Screen>
      <Tab.Screen
        name="Modal Fade"
        options={{ tabBarLabel: 'Fade' }}
      >
        {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" />}
      </Tab.Screen>
      <Tab.Screen
        name="Modal None"
        options={{ tabBarLabel: 'None' }}
      >
        {() => <CustomModalScreen animation="none" themeColor="#FF9800" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
