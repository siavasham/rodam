import React, { useState } from 'react';
import theme from 'theme/default';
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
        backgroundColor: theme.tabbarBackground,
        shadowColor: theme.tabbarBackground,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 3,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    item: {
        flex: 1,
    },
});