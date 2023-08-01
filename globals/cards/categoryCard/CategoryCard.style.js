import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../../constants/Theme';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.greyStroke,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryName: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        padding: 24,
    },
    deleteIconWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
});

export default styles;