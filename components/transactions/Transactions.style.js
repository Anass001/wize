import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overviewContainer: {
        height: '40%',
        backgroundColor: 'white',
    },
    monthPickerContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 8,
    },
    balanceContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
    },
    balanceDescription: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.secondaryText,
    },
    balanceText: {
        fontFamily: FONTS.medium,
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginTop: 8,
    },
    transactionsOverviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 36,
        paddingHorizontal: 16,
    },
    transactionsOverviewWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionsOverviewTextContainer: {
        marginLeft: 8,
    },
    incomeText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.secondaryText,
    },
    incomeAmount: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.green,
    },
    expenseText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.secondaryText,
    },
    expenseAmount: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.red,
    },
    detailsContainer: {
        marginTop: 48,
        marginHorizontal: 16,
        height: '100%',
    },
    addTransactionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
        position: 'absolute',
        bottom: -32,
    },
    addTransactionButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    addExpenseButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 200,
    },
    addIncomeButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: 16,
    },
});

export default styles;