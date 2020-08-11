import React from 'react';
import theme from 'theme/default';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'component/icons';


export default function Avatar(props) {
    return (
        <View style={styles.container}>
            <Icon name='user' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.avatarBackground,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
});