import styles from './CategoryCard.style';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CategoryCard({ data, onEditPressed, onDeletePressed }) {

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.categoryNameWrapper} activeOpacity={0.4} onPress={onEditPressed}>
                <Text style={styles.categoryName}>{data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteIconWrapper} activeOpacity={0.4} onPress={onDeletePressed}>
                <Ionicons name="trash-outline" size={24} color="grey" />
            </TouchableOpacity>
        </View>
    )
}