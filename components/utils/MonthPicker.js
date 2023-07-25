import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, Dimensions, TouchableOpacity } from 'react-native';
import YearMonthPicker from './yearMonthPicker';

// or any pure javascript modules available in npm
const Screen = Dimensions.get('window');

export default class MonthPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startYear: 2000,
            endYear: 2018,
            selectedYear: 2018,
            selectedMonth: 5,
        }
    }

    showPicker = () => {
        const { startYear, endYear, selectedYear, selectedMonth } = this.state;
        this.picker
            .show({ startYear, endYear, selectedYear, selectedMonth })
            .then(({ year, month }) => {
                this.setState({
                    selectedYear: year,
                    selectedMonth: month
                })
            })
    }

    render() {
        const { selectedYear, selectedMonth } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.showPickerBtn}
                    onPress={this.showPicker}
                >
                    <Text>Show Picker</Text>
                </TouchableOpacity>
                <Text style={styles.yearMonthText}>{selectedYear}-{selectedMonth}</Text>
                <YearMonthPicker
                    ref={(picker) => this.picker = picker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    showPickerBtn: {
        height: 44,
        backgroundColor: '#973BC2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    yearMonthText: {
        fontSize: 20,
        marginTop: 12
    }
});