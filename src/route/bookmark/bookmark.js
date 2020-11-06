import React, { useEffect, useState, useRef } from 'react';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import ReadMore from 'widget/readMore';
import HomeCard from 'widget/homeCard';

import { StyleSheet, View, VirtualizedList } from 'react-native';

const DATA = [];

const getItem = (data, index) => {
    return {
        id: Math.random().toString(12).substring(0),
        title: 'تست'
    }
}

const getItemCount = (data) => {
    return 50;
}

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default function Home() {

    return (
        <View style={styles.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }, i) => <HomeCard key={i} item={item} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});