import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import bg from 'bg.jpg';

export default function Background() {
    return (
        <View style={styles.image} />
    )
    return (
        <ImageBackground source={bg} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: '#ebedee',
        resizeMode: "cover",
        justifyContent: "center",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});