import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/navigationTheme';


export default function App() {

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>

  );
}

