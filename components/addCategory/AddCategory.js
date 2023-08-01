import React from 'react';
import { View, Text } from 'react-native';
import styles from './AddCategory.style';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function AddCategory() {

    const [isNewCategoryNameInputFocused, setIsNewCategoryNameInputFocused] = useState(true);

    return (
        <View style={styles.container}>
            <View style={isNewCategoryNameInputFocused ? styles.newCategoryNameInputFocused : styles.newCategoryNameInputBlurred}>
                <TextInput
                    style={styles.newCategoryNameInput}
                    placeholder="Category name"
                    onFocus={() => setIsNewCategoryNameInputFocused(true)}
                    onBlur={() => setIsNewCategoryNameInputFocused(false)}
                    autoFocus={true}
                />
            </View>
        </View>
    )
}