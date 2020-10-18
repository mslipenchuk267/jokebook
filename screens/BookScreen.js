import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../components/CustomButton';
import JokeCard from '../components/JokeCard';
import * as jokeActions from '../store/actions/jokes';

const BookScreen = () => {
    const savedJokes = useSelector(state => state.jokes.savedJokes);
    const dispatch = useDispatch();

    const handleJokePress = (joke) => {
        console.log("I Pressed delete")
        dispatch(jokeActions.removeSavedJoke(joke));
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={savedJokes}
                keyExtractor={(item) => item.punchline}
                renderItem={({ item }) => (
                    <View style={{ maxWidth: '80%' }}>
                        <TouchableOpacity onPress={handleJokePress.bind(this, item)}>
                            <JokeCard joke={item} />
                        </TouchableOpacity>
                    </View>
                )}
            />
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