import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabItem from './tabItem';

export default function App({ style, items, onChange }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPress = (index, name) => {
        setActiveIndex(index);
        onChange(name)
    }
    return (
        <View style={[styles.bar, style]}>
            {items.map((it, index) => (
                <TabItem
                    key={index}
                    style={styles.item}
                    icon={it.icon}
                    label={it.label}
                    active={index === activeIndex}
                    onPress={() => onPress(index, it.name)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        flexDirection: "row-reverse",
        height: 50,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    item: {
        flex: 1,
    },
});