import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../../../constants/Theme';

export default function TransactionCardItem({ transaction }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={{
                fontSize: 16,
                color: COLORS.secondaryText,
                fontFamily: FONTS.regular,
            }}>{transaction.title}</Text>
            <Text style={{
                fontSize: 16,
                color: transaction.type === 'income' ? COLORS.green : COLORS.red,
                fontFamily: FONTS.regular,
            }}>MAD {transaction.amount.toFixed(2)}</Text>
        </View>
    );
}