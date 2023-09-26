import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { FullWindowOverlay } from 'react-native-screens';
import { Portal } from '@gorhom/portal';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { set } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddTransactionModal({ children }) {

    const bottomSheetRef = useRef(null);

    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

    const handleClosePress = useCallback(() => {
        bottomSheetRef.current.close();
        setIsBottomSheetOpen(false);
    }, []);

    const snapPoints = useMemo(() => ['25%', '50%'], []);

    return (
        <View>
            <Text>Add Transaction</Text>
            <Portal>
                <FullWindowOverlay style={StyleSheet.absoluteFill}>
                    <BottomSheetModalProvider>
                        <View
                            style={[
                                styles.container,
                                {
                                    display: isBottomSheetOpen ? 'flex' : 'none',

                                },
                            ]}>
                            <BottomSheet
                                index={1}
                                snapPoints={snapPoints}
                                ref={bottomSheetRef}
                                handleComponent={() => null}
                            >
                                <View style={styles.contentContainer}>
                                </View>
                            </BottomSheet>
                        </View>
                    </BottomSheetModalProvider>
                </FullWindowOverlay>
            </Portal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
