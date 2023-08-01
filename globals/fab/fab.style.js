import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants/Theme';

const styles = StyleSheet.create({
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        position: 'absolute',
        bottom: 16,
        right: 8,
        zIndex: 200,
    }
});

export default styles;