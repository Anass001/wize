
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import InputContainer from './InputContainer.js';

export default function CustomTextInput({ placeholder, value, onChangeText, label, keyboardType }) {

    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <InputContainer isInputFocused={isInputFocused} label={label}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                returnKeyType="done"
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
        </InputContainer>
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        padding: 16,
    },
});