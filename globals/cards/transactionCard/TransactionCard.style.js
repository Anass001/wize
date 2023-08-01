import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 16,
        borderWidth: 1,
        borderColor: COLORS.greyStroke,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 16,
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderDayNumber: {
        fontSize: 32,
        marginRight: 8,
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderDayNumberToday: {
        fontSize: 32,
        marginRight: 8,
        color: COLORS.primary,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateTextWrapper: {
        flexDirection: 'column',
    },
    cardHeaderDateDayName: {
        fontSize: 16,
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateMonthYear: {
        fontSize: 16,
        color: COLORS.secondaryText,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateDayNameToday: {
        fontSize: 16,
        color: COLORS.primary,
        fontFamily: FONTS.regular,
    },
    cardHeaderDateMonthYearToday: {
        fontSize: 16,
        color: COLORS.primary,
        fontFamily: FONTS.regular,
    },
    cardHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderTransactions: {
        marginRight: 16,
    },
    cardHeaderIncomeText: {
        fontSize: 16,
        color: COLORS.green,
        fontFamily: FONTS.regular,
    },
    cardHeaderExpensesText: {
        fontSize: 16,
        color: COLORS.red,
        fontFamily: FONTS.regular,
    },
    dropdownIcon: {
        color: COLORS.secondaryText,
    },
    cardCollabsable: {
        height: 0,
        overflow: 'hidden',
    },
    cardCollabsableExpanded: {
        flexDirection: 'column',
        overflow: 'hidden',
        marginRight: 31,
        marginTop: 20,
    },
});

export default styles;