import React, { memo, useEffect, useState, useRef } from 'react';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

let DefaultData = [
    {
        title: "Item 1",
        text: "Text 1",
        image: 'https://picsum.photos/200/300'
    },
    {
        title: "Item 2",
        text: "Text 2",
        image: 'https://picsum.photos/200/300'
    },
    {
        title: "Item 3",
        text: "Text 3",
        image: 'https://picsum.photos/200/300'
    },
    {
        title: "Item 4",
        text: "Text 4",
        image: 'https://picsum.photos/200/300'
    },
    {
        title: "Item 5",
        text: "Text 5",
        image: 'https://picsum.photos/200/300'
    },
]
export default memo(function ReadMore({ title, data }) {
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
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text bold style={styles.title}>{title}</Text>
                <Pressable onPress={null}>
                    <Text bold style={styles.link}>viewAll</Text>
                </Pressable>
            </View>
            <Carousel
                ref={_carousel}
                layout={'tinder'}
                data={data ? data : DefaultData}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width - 20}
                useScrollView={true}
                loop={true}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    heading: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 0
    },
    slide: {
        height: 180,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    title: {

    },
    link: {
        color: '#999'
    }
});