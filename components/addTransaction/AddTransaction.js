import React from 'react';
import { View, Text, TouchableOpacity, Button, Switch } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './AddTransaction.style';
import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import UpWhite from '../../assets/images/up_white.svg';
import DownWhite from '../../assets/images/down_white.svg';
import { useState, useLayoutEffect, useEffect } from 'react';
import { COLORS } from '../../constants/Theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { init, addTranscation } from '../../data/dao/TransactionDao';
import FloatingPicker from '../../globals/pickers/FloatingPicker';
import openDatabase from '../../data/DbService';
import { useFocusEffect } from '@react-navigation/native';
import { getCategories } from '../../data/dao/CategoryDao';
import { Ionicons } from '@expo/vector-icons';

const db = openDatabase();

export default function AddTransaction({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            init(db)
        }, []
        , []);

    const [isAmountInputFocused, setIsAmountInputFocused] = useState(false);
    const [showCategoryPicker, setShowCategoryPicker] = useState(false);
    const [isDescriptionContainerFocused, setIsDescriptionContainerFocused] = useState(false);

    const [isFrequent, setIsFrequent] = useState(false);

    const [newTransaction, setNewTransaction] = useState({
        type: '',
        amount: '',
        category: {
            id: '',
            name: 'Select a category',
        },
        date: date.toISOString().split('T')[0],
        description: '',
    });

    const onChange = (event, selectedDate) => {
        setNewTransaction({
            ...newTransaction,
            date: selectedDate.toISOString().split('T')[0],
        });
        setShow(false);
    };

    useFocusEffect(
        React.useCallback(() => {
            getCategories(db).then((data) => {
                setCategories(data);
            }
            );
        }, [])
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Button
                        onPress={
                            () => {
                                if (newTransaction.amount != 0 && newTransaction.type.trim() !== "") {
                                    addTranscation(db, newTransaction).then((data) => {
                                        console.log(data);
                                    });
                                    navigation.goBack();
                                }
                            }
                        }
                        title="Save"
                    />
                    <View style={{
                        width: 8,
                    }} />
                </View>
            ),
        });
    }, [navigation, newTransaction]);

    return (
        <View style={styles.container}>
            
            <View style={styles.transactionTypeContainer}>
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={newTransaction.type === 'income' ? styles.incomeSelectionSelected : styles.incomeSelection}
                    onPress={() =>
                        setNewTransaction({
                            ...newTransaction,
                            type: 'income',
                        })
                    }>
                    {
                        newTransaction.type === 'income' ? <UpWhite width={16} height={16} /> : <Up width={16} height={16} />
                    }
                    <Text style={[
                        styles.incomeSelectionText,
                        { color: newTransaction.type === 'income' ? 'white' : COLORS.green },
                    ]}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={newTransaction.type === 'expense' ? styles.expenseSelectionSelected : styles.expenseSelection}
                    onPress={() =>
                        setNewTransaction({
                            ...newTransaction,
                            type: 'expense',
                        })}>
                    {
                        newTransaction.type === 'expense' ? <DownWhite width={16} height={16} /> : <Down width={16} height={16} />
                    }
                    <Text style={[styles.expenseSelectionText, { color: newTransaction.type === 'expense' ? 'white' : COLORS.red },]}>Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.datePickerContainer}>
                <Text
                    style={styles.datePickerText}
                >Date</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                />
            </View>
            <View
                style={
                    [
                        styles.descriptionContainer,
                        { borderColor: isDescriptionContainerFocused ? COLORS.primary : COLORS.greyStroke, }
                    ]
                }>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Description"
                    keyboardType='default'
                    returnKeyType="done"
                    value={newTransaction.description}
                    onChangeText={(text) => {
                        setNewTransaction({
                            ...newTransaction,
                            description: text,
                        });
                    }}
                    onFocus={() => setIsDescriptionContainerFocused(true)}
                    onBlur={() => setIsDescriptionContainerFocused(false)}
                />
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
                    value={newTransaction.amount}
                    onChangeText={(text) => {
                        setNewTransaction({
                            ...newTransaction,
                            amount: text,
                        });
                    }}
                    onFocus={() => setIsAmountInputFocused(true)}
                    onBlur={() => setIsAmountInputFocused(false)}
                />
            </View>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => {
                setShowCategoryPicker(true)
            }}>
                <Text style={styles.categoryText}>{newTransaction.category.name}</Text>
                <Icon name="angle-down" size={24} style={
                    [
                        { color: COLORS.secondaryText, },
                    ]
                } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.frequencyContainer} onPress={() => {
                setShowCategoryPicker(true)
                // take you to the frequency screen
            }}>
                <Ionicons name="refresh-outline" size={22} color="black" />
                <Text style={styles.frequencyText}>Once</Text>
            </TouchableOpacity>
            {
                <FloatingPicker
                    data={categories}
                    selectedItem={newTransaction.category}
                    setSelectedItem={(item) => {
                        setNewTransaction({
                            ...newTransaction,
                            category: item,
                        });

                    }}
                    setShow={setShowCategoryPicker}
                    show={showCategoryPicker}
                />
            }
        </View >
    );
}
