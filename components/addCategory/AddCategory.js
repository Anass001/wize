import React from 'react';
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './AddCategory.style';
import { useState, useLayoutEffect } from 'react';
import './../../assets/fonts/source-sans-pro.regular.ttf';
import { useEffect } from 'react';

import openDatabase from '../../data/DbService';
import { init, addCategory } from '../../data/dao/CategoryDao';

import { COLORS } from '../../constants/Theme';

import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import UpWhite from '../../assets/images/up_white.svg';
import DownWhite from '../../assets/images/down_white.svg';

const db = openDatabase();

export default function AddCategory({ navigation }) {

    const [isNewCategoryNameInputFocused, setIsNewCategoryNameInputFocused] = useState(true);
    const [newCategory, setNewCategory] = useState({ name: "", type: "" });

    useEffect(
        () => {
            init(db)
        }, []
        , []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Button
                        onPress={
                            () => {
                                if (newCategory.name.trim() !== "" && newCategory.type.trim() !== "") {
                                    addCategory(db, newCategory.name, newCategory.type.toUpperCase())
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
    }, [navigation, newCategory]);

    return (
        <View style={styles.container}>
            <View style={styles.transactionTypeContainer}>
                <TouchableOpacity activeOpacity={0.4} style={newCategory.type === 'income' ? styles.incomeSelectionSelected : styles.incomeSelection} onPress={() => {
                    setNewCategory({ ...newCategory, type: 'income' })
                }
                }>
                    {
                        newCategory.type === 'income' ? <UpWhite width={16} height={16} /> : <Up width={16} height={16} />
                    }
                    <Text style={[
                        styles.incomeSelectionText,
                        { color: newCategory.type === 'income' ? 'white' : COLORS.green },
                    ]}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={newCategory.type === 'expense' ? styles.expenseSelectionSelected : styles.expenseSelection} onPress={() => {
                    setNewCategory({ ...newCategory, type: 'expense' })
                }}>
                    {
                        newCategory.type === 'expense' ? <DownWhite width={16} height={16} /> : <Down width={16} height={16} />
                    }
                    <Text style={[
                        styles.expenseSelectionText,
                        { color: newCategory.type === 'expense' ? 'white' : COLORS.red },
                    ]}>Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={
                [
                    styles.newCategoryNameInputWrapper,
                    { borderColor: isNewCategoryNameInputFocused ? COLORS.primary : COLORS.greyStroke, }
                ]
            }>
                <TextInput
                    style={styles.newCategoryNameInput}
                    placeholder="Category name"
                    onFocus={() => setIsNewCategoryNameInputFocused(true)}
                    onBlur={() => setIsNewCategoryNameInputFocused(false)}
                    onChangeText={text => {
                        setNewCategory({ ...newCategory, name: text })
                    }}
                    autoFocus={true}
                />
            </View>
        </View>
    )
}