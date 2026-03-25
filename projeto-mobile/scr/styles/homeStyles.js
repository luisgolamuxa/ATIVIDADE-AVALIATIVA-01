import { StyleSheet } from 'react-native';
import theme from './theme';

const homeStyles = StyleSheet.create({
	containerCenter: {
		flex: 1,
		justifyContent: 'center',
		padding: theme.spacing.md,
		backgroundColor: theme.colors.background,
	},
});

export default homeStyles;
