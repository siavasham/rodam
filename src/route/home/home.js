import React, { useEffect, useState, useRef } from 'react';
import Background from 'component/bg';
import Pressable from 'component/pressable';
import ReadMore from 'widget/readMore';
import theme from 'theme/default';
import Bg from 'component/bg';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function explorer() {
    return (
        <View style={styles.container}>
            <Bg />
            <ReadMore title='popular' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.primaryBackground,
    },
});