import React from 'react';
import { View, Text } from 'react-native';
import styles from './AddCategory.style';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../constants/Theme';

export default function AddBudget() {

    const [isNewBudgetNameInputFocused, setIsNewBudgetNameInputFocused] = useState(true);

    return (
        <View style={styles.container}>
            <View style={
                [
                    styles.newBudgetNameInputWrapper,
                    { borderColor: isNewBudgetNameInputFocused ? COLORS.primary : COLORS.greyStroke, }
                ]
            }>
                <TextInput
                    style={styles.newBudgetNameInput}
                    placeholder="Budget name"
                    onFocus={() => setIsNewBudgetNameInputFocused(true)}
                    onBlur={() => setIsNewBudgetNameInputFocused(false)}
                    autoFocus={true}
                />
            </View>
        </View>
    )
}