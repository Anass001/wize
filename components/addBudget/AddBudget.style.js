import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    textInput: {
        flex: 1,
        padding: 16,
    },
    textInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
    },
    numberInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        borderWidth: 1,
        borderRadius: 4,
    },
    numberInput: {
        flex: 1,
        padding: 16,
    },
    currencyText: {
        color: COLORS.secondaryText,
        paddingStart: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        borderColor: COLORS.greyStroke,
    },
});

export default styles;