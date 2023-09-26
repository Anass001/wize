import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, FlatList, LayoutAnimation } from 'react-native';
import { useState } from 'react';
import TransactionCardItem from './TransactionCardItem';
import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../constants/Theme';

function isDateToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

export default function TransactionCard(data) {

    const date = data.transaction.date;
    const [parsedYear, parsedMonth, parsedDay] = date.split('-');
    const parsedDate = new Date(parsedYear, parsedMonth - 1, parsedDay);

    const isToday = isDateToday(parsedDate);
    const dayDate = parsedDate.getDate();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[parsedDate.getDay()];

    const monthName = parsedDate.toLocaleString('en-us', { month: 'long' });
    const year = parsedDate.getFullYear();

    const [isExpanded, setIsExpanded] = useState(false);

    let totalIncome = 0;
    let totalExpense = 0;

    // Iterate over the transaction items
    for (const key in data.transaction) {
        if (key === "date") {
            continue; // Skip the "date" property
        }

        const transaction = data.transaction[key];
        const amount = transaction.amount;
        const type = transaction.type;

        // Determine whether it's income or expense and update the corresponding total
        if (type === "income") {
            totalIncome += amount;
        } else if (type === "expense") {
            totalExpense += amount;
        }
    }

    const TransactionData = Object.keys(data.transaction)
        .filter((key) => key !== 'date')
        .map((key) => data.transaction[key]);

    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.cardContainer} onPress={
            () => {
                setIsExpanded(!isExpanded);
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }
        }>
            <View style={styles.cardHeader} >
                <View style={styles.cardHeaderLeft}>
                    <Text style={[styles.cardHeaderDayNumber, { color: isToday ? COLORS.primary : COLORS.secondaryText }]}>{dayDate}</Text>
                    <View style={styles.cardHeaderDateTextWrapper}>
                        <Text style={[styles.cardHeaderDateDayName, { color: isToday ? COLORS.primary : COLORS.secondaryText }]}>{dayName}</Text>
                        <Text style={[styles.cardHeaderDateMonthYear, { color: isToday ? COLORS.primary : COLORS.secondaryText, }]}>{monthName}, {year}</Text>
                    </View>
                </View>
                <View style={styles.cardHeaderRight}>
                    <View style={styles.cardHeaderTransactions}>
                        <Text style={styles.cardHeaderIncomeText}>MAD {totalIncome.toFixed(2)}</Text>
                        <Text style={styles.cardHeaderExpensesText}>MAD {totalExpense.toFixed(2)}</Text>
                    </View>
                    <Icon name="angle-down" size={24} style={[styles.dropdownIcon, {
                        transform: isExpanded ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }],
                    }
                    ]} />
                </View>
            </View>
            <View style={isExpanded ? styles.cardCollabsableExpanded : styles.cardCollabsable}>
                <FlatList
                    data={TransactionData}
                    renderItem={({ item }) => <TransactionCardItem transaction={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 16,
        borderWidth: 1,
        borderColor: COLORS.greyStroke,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 16,
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderDayNumber: {
        fontSize: 32,
        marginRight: 8,
        minWidth: 32,
        textAlign: 'center',
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateTextWrapper: {
        flexDirection: 'column',
    },
    cardHeaderDateDayName: {
        fontSize: 16,
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateMonthYear: {
        fontSize: 16,
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderTransactions: {
        marginRight: 16,
    },
    cardHeaderIncomeText: {
        fontSize: 16,
        color: COLORS.green,
        fontFamily: FONTS.regular,
    },
    cardHeaderExpensesText: {
        fontSize: 16,
        color: COLORS.red,
        fontFamily: FONTS.regular,
    },
    dropdownIcon: {
        color: COLORS.secondaryText,
    },
    cardCollabsable: {
        height: 0,
        overflow: 'hidden',
    },
    cardCollabsableExpanded: {
        flexDirection: 'column',
        overflow: 'hidden',
        marginRight: 31,
        marginTop: 20,
    },
});
