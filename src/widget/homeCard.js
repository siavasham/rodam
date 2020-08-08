import React, { memo, useEffect, useState, useRef } from 'react';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import { StyleSheet, View, Image } from 'react-native';

export default memo(function ReadMore({ item }) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View style={styles.content} >
                <View style={styles.titleView} >
                    <Text noTransition style={styles.titleText}>{item.title}</Text>
                </View>
            </View>
        </View>
    )
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: "#555",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1,
        height: 250,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '65%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleView: {
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: 10
    },
    titleText: {
        fontSize: 18
    }
});
