import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { JokebookNavigator } from '../navigation/JokebookNavigator';
import StartupScreen from '../screens/StartupScreen';
import BookScreen from '../screens/BookScreen';
import { useSelector } from 'react-redux';


const AppNavigator = (props) => {
    const didStartup = useSelector(state => state.jokes.didStartup);
    return (
        <NavigationContainer>
            { didStartup === false && <StartupScreen />}
            { didStartup === true && <JokebookNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigator;