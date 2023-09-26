import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../constants/Theme.js';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function InputContainer({ children, isInputFocused, label }) {
    return (
        <View
            style={
                [
                    styles.container,
                    { borderColor: isInputFocused ? COLORS.primary : COLORS.greyStroke, }
                ]
            }>
            {
                label &&
                <Text style={styles.label}>{label}</Text>
            }
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: COLORS.secondaryText,
        paddingStart: 16,
    },
});