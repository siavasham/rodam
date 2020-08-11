import React, { useEffect, useState, useRef } from 'react';
import Background from 'component/bg';
import Pressable from 'component/pressable';
import ReadMore from 'widget/readMore';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function explorer() {
    return (
        <View style={styles.container}>
            <ReadMore title='popular' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});