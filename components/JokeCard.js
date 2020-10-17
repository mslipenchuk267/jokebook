import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JokeCard = (props) => {
    return (
        <View style={styles.card} >
            <Text style={styles.jokeText}>{props.joke.setup}</Text>
            <Text style={styles.jokeText}>{props.joke.punchline}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    jokeText: {
        fontSize: 24,
        paddingVertical: 15
    }
});

export default JokeCard;