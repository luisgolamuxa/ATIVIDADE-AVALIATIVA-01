import { StyleSheet } from 'react-native';
import theme from './theme';

const scrollStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	content: {
		padding: theme.spacing.md,
	},
});

export default scrollStyles;
