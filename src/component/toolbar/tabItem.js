import React from 'react';
import theme from 'theme/default';
import Text from 'component/Text';
import Pressable from 'component/pressable';
import { StyleSheet, View, Image, Animated } from 'react-native';
import useSpring from './useSpring';

export default function Tabitem({ style, icon, label, active, onPress }) {
    const animation = useSpring({ to: active ? 1 : 0 }, { stiffness: 50 });
    const labelTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [20, 0] });
    const iconTranslate = animation.interpolate({ inputRange: [0, 1], outputRange: [0, -30] });
    const labelOpacity = animation;
    const iconOpacity = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
    const dotScale = animation;
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container, style]}>
                {active && (
                    <Animated.View
                        style={[
                            styles.centered,
                            { opacity: labelOpacity, transform: [{ translateY: labelTranslate }] },
                        ]}
                    >
                        <Text style={styles.label}>{label}</Text>
                    </Animated.View>
                )}
                {!active && (
                    <Animated.View
                        style={[
                            styles.centered,
                            { opacity: iconOpacity, transform: [{ translateY: iconTranslate }] },
                        ]}
                    >
                        <Image style={styles.icon} source={icon} />
                    </Animated.View>
                )}
                {active && <Animated.View style={[styles.dot, { transform: [{ scale: dotScale }] }]} />}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    centered: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        tintColor: theme.tabbarColor,
        width: 22,
        height: 22,
    },
    label: {
        color: theme.tabbarColor,
        fontSize: 16,
        marginTop: -5
    },
    dot: {
        position: "absolute",
        bottom: 8,
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: theme.tabbarColor,
    },
});