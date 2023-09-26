import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/Theme.js';

export default function Fab({ onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.fab} onPress={onPress}>
            <Icon name="plus" color="#fff" size={36} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        position: 'absolute',
        bottom: 16,
        right: 8,
        zIndex: 200,
    }
});