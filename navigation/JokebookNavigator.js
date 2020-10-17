import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';

const JokebookTabNavigator = createBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();
const SavedJokesStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}

export const SavedJokesNavigator = () => {
    return (
        <SavedJokesStackNavigator.Navigator>
            <SavedJokesStackNavigator.Screen
                name="Book"
                component={BookScreen}
            />
        </SavedJokesStackNavigator.Navigator>
    )
}

export const JokebookNavigator = () => {
    return (
        <JokebookTabNavigator.Navigator>
            <JokebookTabNavigator.Screen 
                name="Home"
                component={HomeNavigator}
            />
            <JokebookTabNavigator.Screen 
                name="Book"
                component={SavedJokesNavigator}
                options={{ title: "Saved Jokes" }}
            />
        </JokebookTabNavigator.Navigator>
    )
}