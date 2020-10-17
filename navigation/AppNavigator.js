import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { JokebookNavigator } from '../navigation/JokebookNavigator';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';


const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <JokebookNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;