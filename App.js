import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import ImageInput from "./app/components/ImageInput";
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>


  );
}

