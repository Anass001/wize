import React, { useState, useMemo, useCallback } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Portal } from '@gorhom/portal';
import { BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { FullWindowOverlay } from 'react-native-screens';
import { Picker } from '@react-native-picker/picker';
import BottomSheet from '@gorhom/bottom-sheet';

function renderItems(data) {
    return data.map((item) => (
        <Picker.Item key={item.id} label={item.name} value={item.name} />
    ));
}

export function BottomSheetPicker({ data, selectedItem, setSelectedItem, setShow, show, mRef }) {

    const snapPoints = useMemo(() => ['25%', '40%'], []);

    const [currentSelectedItem, setCurrentSelectedItem] = useState(selectedItem);

    const handleClosePress = useCallback(() => {
        mRef.current.close();
        setShow(false);
    }, []);

    const handleValueChange = (itemValue, itemIndex) => {
        setCurrentSelectedItem(data[itemIndex]);
    };

    return (
        <Portal>
            <FullWindowOverlay style={StyleSheet.absoluteFill}>
                <BottomSheetModalProvider>
                    <View
                        style={[
                            styles.bottomSheetContainer,
                            {
                                display: show ? 'flex' : 'none',

                            },
                        ]}>
                        <BottomSheet
                            index={1}
                            snapPoints={snapPoints}
                            ref={mRef}
                            handleComponent={() => null}
                        >
                            <View style={styles.bottomSheetContentContainer}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: 50,
                                    padding: 8,
                                }}>
                                    <Button title="Close" onPress={handleClosePress} />
                                    <Button title="Save" onPress={
                                        () => {
                                            setSelectedItem(currentSelectedItem);
                                            if (currentSelectedItem.id === '') {
                                                setSelectedItem(data[0]);
                                            }
                                            handleClosePress();
                                        }
                                    } />
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
                        </BottomSheet>
                    </View>
                </BottomSheetModalProvider>
            </FullWindowOverlay>
        </Portal>
    )
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
    },
    bottomSheetContentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
    }
});