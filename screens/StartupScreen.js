import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';

import * as jokesActions from '../store/actions/jokes';

const StartupScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryStartup = async () => {
            await dispatch(jokesActions.getNewJoke());
            await dispatch(jokesActions.setSavedJokes());
            await dispatch(jokesActions.didStartup());

        }
        tryStartup();
    }, [dispatch])

    return (
        <View><Text>This is the startup screen</Text></View>
    )
}

export default StartupScreen;