import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

function renderItems(data) {
    return data.map((item) => (
        <Picker.Item key={item.id} label={item.name} value={item.name} />
    ));
}

export default function FloatingPicker({ data, selectedItem, setSelectedItem, setShow, show }) {

    const [currentSelectedItem, setCurrentSelectedItem] = useState(selectedItem);

    // set currentSelectedItem to first item in data use useEffect
    useEffect(() => {
        console.log(data);
        // setCurrentSelectedItem(data[0]);
        // console.log(currentSelectedItem);
    }
        , [], []);

    const handleValueChange = (itemValue, itemIndex) => {
        setCurrentSelectedItem(data[itemIndex]);
        console.log(currentSelectedItem);
    };

    return (
        <Animated.View style={[
            styles.modal,
            {
                display: show ? 'flex' : 'none',
            }
        ]}>
            <View style={styles.outerContainer}>
                <View style={styles.toolBar}>
                    <TouchableOpacity style={styles.toolBarButton} onPress={
                        () => {
                            setShow(false);
                        }
                    }>
                        <Text style={styles.toolBarButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity style={styles.toolBarButton} onPress={
                        () => {
                            setSelectedItem(currentSelectedItem);
                            if(currentSelectedItem.name === 'Select a category'){
                                setSelectedItem(data[0]);
                            }
                            setShow(false);
                        }
                    }>
                        <Text style={styles.toolBarButtonText}>Set</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={currentSelectedItem.name}
                        onValueChange={handleValueChange}
                    >
                        {renderItems(data)}
                    </Picker>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    outerContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    toolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        borderBottomWidth: 1,
        borderColor: '#EBECED',
    },
    toolBarButton: {
        height: 44,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    toolBarButtonText: {
        fontSize: 15,
        color: COLORS.primary,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
    }
})