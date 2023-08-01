import React from 'react'
import styles from './fab.style.js'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Fab({ onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.fab} onPress={onPress}>
            <Icon name="plus" color="#fff" size={36} />
        </TouchableOpacity>
    )
}