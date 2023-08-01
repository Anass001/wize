import { View, Text, Button, TouchableOpacity, SafeAreaView, FlatList, LayoutAnimation } from 'react-native';
import styles from './Transactions.style';
import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import React from 'react'
import TransactionCard from '../../globals/cards/transactionCard/TransactionCard';
import Icon from 'react-native-vector-icons/Octicons';
import { useState } from 'react';

export default function Transactions({ navigation }) {

    const transactions = [
        {
            id: 0,
            title: 'Rent',
            amount: 1000,
            type: 'expense',
            date: '2023-07-25',
        },
        {
            id: 1,
            title: 'Salary',
            amount: 5500,
            type: 'income',
            date: '2021-05-01',
        },
        {
            id: 2,
            title: 'Rent',
            amount: 1000,
            type: 'expense',
            date: '2021-05-01',
        },
        {
            id: 3,
            title: 'Salary',
            amount: 5500,
            type: 'income',
            date: '2021-05-02',
        },
    ];

    const transactionsByDate = transactions.reduce((acc, transaction) => {
        const { date, ...rest } = transaction;
        if (!acc[date]) {
            acc[date] = [rest];
        } else {
            acc[date].push(rest);
        }
        return acc;
    }, {});

    const formattedTransactions = Object.keys(transactionsByDate).map((date) => ({
        date,
        ...transactionsByDate[date],
    }));

    return (
        <View style={styles.container}>
            <View style={styles.overviewContainer}>
                <View style={styles.monthPickerContainer}>
                    {/* <SafeAreaView>
                    <Text>Month Year Picker Example</Text>
                    <TouchableOpacity onPress={() => showPicker(true)}>
                        <Text>OPEN</Text>
                    </TouchableOpacity>
                    {show && (
                        <MonthPicker
                            onChange={onValueChange}
                            value={date}
                            minimumDate={new Date()}
                            maximumDate={new Date(2025, 5)}
                            locale="ko"
                        />
                    )}
                </SafeAreaView> */}
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceDescription}>Total balance</Text>
                    <Text style={styles.balanceText}>MAD 2,548.00</Text>
                </View>
                <View style={styles.transactionsOverviewContainer}>
                    <View style={styles.transactionsOverviewWrapper}>
                        <Up width={24} height={24} />
                        <View style={styles.transactionsOverviewTextContainer}>
                            <Text style={styles.incomeText}>Income</Text>
                            <Text style={styles.incomeAmount}>MAD 3,548.00</Text>
                        </View>
                    </View>
                    <View style={styles.transactionsOverviewWrapper}>
                        <Down width={24} height={24} />
                        <View style={styles.transactionsOverviewTextContainer}>
                            <Text style={styles.expenseText}>Expenses</Text>
                            <Text style={styles.expenseAmount}>MAD 1,000.00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addTransactionButtonContainer}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.addTransactionButton} onPress={
                        () => navigation.navigate('AddTransaction')
                    }>
                        <Icon name="plus" color="#fff" size={36} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <FlatList
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    data={formattedTransactions}
                    renderItem={({ item }) => {
                        return <TransactionCard transaction={item} />;
                    }}
                />
            </View>
        </View>
    )
}