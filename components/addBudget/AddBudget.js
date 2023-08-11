import React from 'react';
import { View, Text } from 'react-native';
import styles from './AddBudget.style';
import { TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../constants/Theme';
import { useLayoutEffect, useEffect } from 'react';
import { Button } from 'react-native';
import openDatabase from '../../data/DbService';
import { init, addBudget, getBudgets } from '../../data/dao/BudgetDao';
import { init as initCategoriesDb, getCategories } from '../../data/dao/CategoryDao';
import FloatingPicker from '../../globals/pickers/FloatingPicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

const db = openDatabase();

function getAvailableCategories(categories, budgets) {
    let availableCategories = [];
    for (let i = 0; i < categories.length; i++) {
        let isCategoryUsed = false;
        for (let j = 0; j < budgets.length; j++) {
            if (categories[i].id === budgets[j].categoryid) {
                isCategoryUsed = true;
                break;
            }
        }
        if (!isCategoryUsed) {
            availableCategories.push(categories[i]);
        }
    }
    return availableCategories;
}

export default function AddBudget({ navigation }) {

    const [isNumberInputFocused, setIsNumberInputFocused] = useState(false);
    const [showCategoryPicker, setShowCategoryPicker] = useState(false);

    const [newBudget, setNewBudget] = useState({ amount: '', categoryid: "" });
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ id: "", name: "Select a category" });

    useEffect(
        () => {
            init(db)
            initCategoriesDb(db)
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
                                setNewBudget({
                                    ...newBudget,
                                    categoryid: category.id,
                                });
                                if (newBudget.amount !== 0 && newBudget.categoryid.toString() !== "") {
                                    console.log(newBudget);
                                    addBudget(db, newBudget)
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
    }, [navigation, newBudget, category]);

    useFocusEffect(
        React.useCallback(() => {
            getCategories(db).then((categories) => {
                setCategories(categories);
            });
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={
                [
                    styles.numberInputContainer,
                    { borderColor: isNumberInputFocused ? COLORS.primary : COLORS.greyStroke, }
                ]
            }>
                <Text style={styles.currencyText}>MAD</Text>
                <TextInput
                    style={styles.numberInput}
                    placeholder="Amount"
                    keyboardType='numeric'
                    returnKeyType="done"
                    onFocus={() => setIsNumberInputFocused(true)}
                    onBlur={() => setIsNumberInputFocused(false)}
                    value={newBudget.amount}
                    onChangeText={(text) => {
                        setNewBudget({
                            ...newBudget,
                            amount: text,
                        });
                    }}
                    autoFocus={true}
                />
            </View>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => {
                setShowCategoryPicker(true)
            }}>
                <Text style={styles.categoryText}>{category.name}</Text>
                <Icon name="angle-down" size={24} style={
                    [
                        { color: COLORS.secondaryText, },
                    ]
                } />
            </TouchableOpacity>
            {
                showCategoryPicker &&
                <FloatingPicker
                    data={categories}
                    selectedItem={category}
                    setSelectedItem={setCategory}
                    setShow={setShowCategoryPicker}
                />
            }
        </View>
    )
}