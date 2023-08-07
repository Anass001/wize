import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: 'white',
    },
    transactionTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    incomeSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginEnd: 4,
        borderWidth: 1,
        borderColor: COLORS.green,
        flex: 1,
    },
    incomeSelectionSelected: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 17,
        borderRadius: 4,
        marginEnd: 4,
        backgroundColor: COLORS.green,
        flex: 1,
    },
    incomeSelectionText: {
        color: COLORS.green,
        fontFamily: FONTS.regular,
        fontSize: 16,
        marginLeft: 8,
    },
    expenseSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginStart: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.red,
        flex: 1,
    },
    expenseSelectionSelected: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 17,
        marginStart: 4,
        borderRadius: 4,
        backgroundColor: COLORS.red,
        flex: 1,
    },
    expenseSelectionText: {
        color: COLORS.red,
        fontFamily: FONTS.regular,
        fontSize: 16,
        marginLeft: 8,
    },
    transactionAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        borderWidth: 1,
        borderRadius: 4,
    },
    amountInput: {
        flex: 1,
        padding: 16,
    },
    currencyText: {
        color: COLORS.secondaryText,
        paddingStart: 16,
    },
})

export default styles;