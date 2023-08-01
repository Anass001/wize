import styles from './CategoryCard.style';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CategoryCard({ data, onPress }) {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.categoryName}>{data.name}</Text>
            <TouchableOpacity style={styles.deleteIconWrapper} activeOpacity={0.4} onPress={onPress}>
                <Ionicons name="trash-outline" size={24} color="grey" />
            </TouchableOpacity>
        </View>
    )
}