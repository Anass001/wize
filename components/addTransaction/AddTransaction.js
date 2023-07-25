import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './AddTransaction.style';
import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import UpWhite from '../../assets/images/up_white.svg';
import DownWhite from '../../assets/images/down_white.svg';
import { Picker } from '@react-native-picker/picker';

export default function AddTransaction() {

    const [type, setType] = React.useState('');
    const [category, setCategory] = React.useState('')
    const [isAmountInputFocused, setIsAmountInputFocused] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.transactionTypeContainer}>
                <TouchableOpacity activeOpacity={0.4} style={type === 'income' ? styles.incomeSelectionSelected : styles.incomeSelection} onPress={() => setType('income')}>
                    {
                        type === 'income' ? <UpWhite width={16} height={16} /> : <Up width={16} height={16} />
                    }
                    <Text style={type === 'income' ? styles.incomeSelectionTextSelected : styles.incomeSelectionText}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={type === 'expense' ? styles.expenseSelectionSelected : styles.expenseSelection} onPress={() => setType('expense')}>
                    {
                        type === 'expense' ? <DownWhite width={16} height={16} /> : <Down width={16} height={16} />
                    }
                    <Text style={type === 'expense' ? styles.expenseSelectionTextSelected : styles.expenseSelectionText}>Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={isAmountInputFocused ? styles.transactionAmountContainerFocused : styles.transactionAmountContainerBlurred}>
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
            <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="jx" />
                <Picker.Item label="JavaScript" value="jr" />
                <Picker.Item label="JavaScript" value="jl" />


            </Picker>
        </View>
    );
}