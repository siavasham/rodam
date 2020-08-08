import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function Pressable({ children, style, onPress }) {
    return (
        <TouchableWithoutFeedback style={[styles.pressable, style]} onPress={onPress}>
            {children}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    pressable: {

    }
})