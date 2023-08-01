import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    newCategoryNameInput: {
        flex: 1,
        padding: 16,
    },
    newCategoryNameInputFocused: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.primary,
    },
    newCategoryNameInputBlurred: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.greyStroke,
    },
});

export default styles;