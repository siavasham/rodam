import React, { memo, useEffect, useState, useRef } from 'react';
import theme from 'theme/default';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import { StyleSheet, View, Image, Text as EnText } from 'react-native';
import Icon from 'component/icons';
import Avatar from 'component/avatar';
export default memo(function ReadMore({ item }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Pressable>
                        <Icon name='more' />
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Pressable>
                        <Avatar />
                    </Pressable>
                    <View style={styles.title}>
                        <Text bold>سیاوش</Text>
                        <Text span>کفش کتونی آدیداس</Text>
                    </View>
                </View>
            </View>
            <View style={styles.imageRoot}>
                <Image resizeMode={'cover'} style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
                <View style={styles.imageShadow} />
            </View>
            <View style={styles.action}>
                <View style={styles.actionLeft}>
                    <Pressable>
                        <View style={styles.label}>
                            <Icon name='like' />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.label}>
                            <Icon name='comment' />
                        </View>
                    </Pressable>
                    <Pressable>
                        <Icon name='share' />
                    </Pressable>
                </View>
                <View style={styles.actionright}>
                    <Pressable>
                        <Icon name='save' />
                    </Pressable>
                </View>
            </View>
        </View>
    )
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme.primaryBackground,
        margin: 5,
        padding: 10,
        shadowColor: theme.primaryColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        height: 380,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    title: {
        paddingTop: 5,
    },
    imageRoot: {
        flex: 1,
        flexDirection: 'column',
    },
    imageShadow: {
        width: '94%',
        height: 10,
        marginLeft: '3%',
        marginTop: -10,
        backgroundColor: theme.backgroundSet,
        shadowColor: theme.primaryColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 0,
        zIndex: 1
    },
    image: {
        flex: 1,
        width: null,
        borderRadius: 10,
        zIndex: 2
    },
    action: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    actionLeft: {
        flex: .4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actionright: {
        justifyContent: 'flex-end',
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});
