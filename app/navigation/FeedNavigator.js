import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator 
        screenOptions={{ 
            headerShown: false,
            gestureEnabled:true, 
            gestureDirection:'vertical', 
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
);

export default FeedNavigator;