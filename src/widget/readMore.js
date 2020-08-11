import React, { memo, useEffect, useState, useRef } from 'react';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import theme from 'theme/default';
import Icon from 'component/icons';

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
                <Pressable onPress={null} >
                    <View style={styles.more}>
                        <Text bold style={styles.link}>viewAll</Text>
                        <Icon name='leftArrow' color={theme.secondaryColor} />
                    </View>
                </Pressable>
            </View>
            <Carousel
                ref={_carousel}
                layout={'default'}
                data={data ? data : DefaultData}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width - 80}
                useScrollView={true}
                loop={true}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.01)',
        marginTop: 20,
        padding: 10,
        shadowColor: theme.primaryColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        height: 250,
        borderRadius: 10,
    },
    heading: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
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
    more: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 1255,
        paddingVertical: 5,
        paddingLeft: 10,
    },
    link: {
        color: theme.secondaryColor,
        marginLeft: -8
    }
});