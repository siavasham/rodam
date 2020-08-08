import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

let data = [
    {
        title: "Item 1",
        text: "Text 1",
        image: 'https://picsum.photos/200/300?r=' + Math.random()
    },
    {
        title: "Item 2",
        text: "Text 2",
        image: 'https://picsum.photos/200/300?r=' + Math.random()
    },
    {
        title: "Item 3",
        text: "Text 3",
        image: 'https://picsum.photos/200/300?r=' + Math.random()
    },
    {
        title: "Item 4",
        text: "Text 4",
        image: 'https://picsum.photos/200/300?r=' + Math.random()
    },
    {
        title: "Item 5",
        text: "Text 5",
        image: 'https://picsum.photos/200/300?r=' + Math.random()
    },
]
export default function Home() {
    let _carousel = useRef();
    const { width, height } = Dimensions.get('window');
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                ref={_carousel}
                layout={'default'}
                data={data}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width - 80}
                firstItem={0}
                useScrollView={true}
                loop={true}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    slide: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        height: 150,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});