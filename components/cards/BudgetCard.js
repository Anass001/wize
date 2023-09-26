import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../constants/Theme';

export default function BudgetCard({ data }) {

    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.budgetDetailsWrapper}>
                <View style={styles.budgetDetailsLeftWrapper}>
                    <Text style={styles.budgetCategory}>{data.name}</Text>
                    <Text style={styles.budgetAmount}>${data.amount}</Text>
                </View>
                <View style={styles.budgetDetailsRightWrapper}>
                    <Text style={
                        [
                            styles.budgetRemaining,
                            { color: data.remaining > 0 ? COLORS.green : COLORS.red }
                        ]
                    }>${data.remaining} remaining</Text>
                </View>
            </View>
            <View style={styles.budgetProgressWrapper}>
                <View style={[
                    styles.budgetProgressBar,
                    {
                        width: data.remaining > 0 ? `${(data.remaining / data.amount) * 100}%` : '0%',
                        backgroundColor: COLORS.green,
                    }
                ]} width='92%'></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.greyStroke,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
    },
    budgetDetailsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    budgetProgressWrapper: {
        flex: 1,
        backgroundColor: COLORS.greyStroke,
        height: 16,
        width: '100%',
        borderRadius: 16,
        marginTop: 16,
    },
    budgetProgressBar: {
        backgroundColor: COLORS.primary,
        height: 16,
        borderRadius: 16,
    },
    budgetAmount: {
        color: COLORS.primary,
    },
});