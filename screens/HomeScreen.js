import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import CustomButton from '../components/CustomButton';
import JokeCard from '../components/JokeCard';
import * as jokeActions from '../store/actions/jokes';
const HomeScreen = () => {
    const currentJoke = useSelector(state => state.jokes.currentJoke)
    const savedJokes = useSelector(state => state.jokes.savedJokes)
    console.log(savedJokes)
    const dispatch = useDispatch();

    const handleLaughButtonPress = () => {
        console.log("Pressed the laugh button")
        dispatch(jokeActions.saveJoke(currentJoke));
        dispatch(jokeActions.getNewJoke());
    }

    const handleLameButtonPress = () => {
        console.log("Pressed the lame button")
    }

    const handleNextJokeButtonPress = () => {
        console.log("Pressed the next joke button")
        dispatch(jokeActions.getNewJoke());
    }

    return (
        <View style={styles.container}>
            <JokeCard joke={currentJoke} />
            <View style={styles.buttonContainer}>
                <CustomButton text="😂" handlePress={handleLaughButtonPress} />
                <CustomButton text="😑" handlePress={handleLameButtonPress} />
            </View>
            <CustomButton text="Next Joke 🔀" handlePress={handleNextJokeButtonPress} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 40
    },
    button: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 40
    }
});

export default HomeScreen;