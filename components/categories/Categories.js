import React from 'react'
import styles from './Categories.style.js'
import { View } from 'react-native';
import Fab from '../../globals/fab/fab';
import CategoryCard from '../../globals/cards/categoryCard/CategoryCard';
import { FlatList } from 'react-native';

export default function Categories({ navigation }) {

    const categories = [
        {
            id: 0,
            name: 'Food',
        },
        {
            id: 1,
            name: 'Rent',
        },
        {
            id: 2,
            name: 'Salary',
        },
        {
            id: 3,
            name: 'Food',
        },
        {
            id: 4,
            name: 'Rent',
        },
        {
            id: 5,
            name: 'Salary',
        },
        {
            id: 6,
            name: 'Food',
        },
        {
            id: 7,
            name: 'Rent',
        },
        {
            id: 8,
            name: 'Salary',
        },
        {
            id: 9,
            name: 'Food',
        },
        {
            id: 10,
            name: 'Rent',
        },
        {
            id: 11,
            name: 'Salary',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <FlatList
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    data={categories}
                    renderItem={({ item }) => {
                        return <CategoryCard data={item} onPress={
                            () => alert('This is a button!')
                        }/>;
                    }}
                />
            </View>
            <Fab onPress={
                () => navigation.navigate('AddCategory')
            } />
        </View>
    )
}