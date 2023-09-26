import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../constants/Theme';

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

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.greyStroke,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryName: {
        fontFamily: FONTS.regular,
        fontSize: 16,
    },
    categoryNameWrapper: {
        flex: 1,
        padding: 24,
    },
    deleteIconWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
});