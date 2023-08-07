import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './AddTransaction.style';
import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import UpWhite from '../../assets/images/up_white.svg';
import DownWhite from '../../assets/images/down_white.svg';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';
import { COLORS } from '../../constants/Theme';


export default function AddTransaction() {

    const [type, setType] = useState('');
    const [category, setCategory] = useState('')
    const [isAmountInputFocused, setIsAmountInputFocused] = useState(false);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.transactionTypeContainer}>
                <TouchableOpacity activeOpacity={0.4} style={type === 'income' ? styles.incomeSelectionSelected : styles.incomeSelection} onPress={() => setType('income')}>
                    {
                        type === 'income' ? <UpWhite width={16} height={16} /> : <Up width={16} height={16} />
                    }
                    <Text style={[
                        styles.incomeSelectionText,
                        { color: type === 'income' ? 'white' : COLORS.green },
                    ]}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={type === 'expense' ? styles.expenseSelectionSelected : styles.expenseSelection} onPress={() => setType('expense')}>
                    {
                        type === 'expense' ? <DownWhite width={16} height={16} /> : <Down width={16} height={16} />
                    }
                    <Text style={[
                        styles.expenseSelectionText,
                        { color: type === 'expense' ? 'white' : COLORS.red },
                    ]}>Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={
                [
                    styles.transactionAmountContainer,
                    { borderColor: isAmountInputFocused ? COLORS.primary : COLORS.greyStroke, }
                ]
            }>
                <Text style={styles.currencyText}>MAD</Text>
                <TextInput
                    style={styles.amountInput}
                    placeholder="Amount"
                    keyboardType='numeric'
                    returnKeyType="done"
                    onFocus={() => setIsAmountInputFocused(true)}
                    onBlur={() => setIsAmountInputFocused(false)}
                />
            </View>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    );
}
