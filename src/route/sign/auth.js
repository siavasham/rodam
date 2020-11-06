import React, { useEffect, useState, useRef } from 'react';
import Pressable from 'component/pressable';
import OTPInput from "component/otp-input";
import theme from 'theme/default';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Auth() {

    const [OTP, setOTP] = useState("");
    return (
        <View style={styles.container}>
            <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.primaryBackground
    },
});