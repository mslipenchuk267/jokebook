import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import CustomButton from '../components/CustomButton';
import JokeCard from '../components/JokeCard';

const BookScreen = () => {
    const handleLaughButtonPress = () => {
        console.log("Pressed the laugh button")
    }

    const handleLameButtonPress = () => {
        console.log("Pressed the lame button")
    }

    const handleNextJokeButtonPress = () => {
        console.log("Pressed the next joke button")
    }

    return (
        <View style={styles.container}>
            <Text>This is the book screen</Text>
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

export default BookScreen;