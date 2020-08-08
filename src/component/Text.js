import React from 'react';
import { t } from 'locales';
import { Text, StyleSheet } from 'react-native';

export default function Txt({ children, style, bold, noTransition }) {
    return (
        <Text style={[bold ? styles.textBold : styles.text, style]}>
            {noTransition ? children : t(children)}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'iran-sans',
        textAlign: 'right'
    },
    textBold: {
        fontSize: 16,
        fontFamily: 'iran-sans-bold',
        textAlign: 'right',
    }
})