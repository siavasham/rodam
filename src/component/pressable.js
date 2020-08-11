import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

export default function Pressable({ children, style, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            {children}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    pressable: {

    }
})