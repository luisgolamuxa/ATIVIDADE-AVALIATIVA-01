import { StyleSheet } from 'react-native';
import theme from './theme';

const globalStyles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	screen: {
		flex: 1,
		padding: theme.spacing.md,
		justifyContent: 'center',
	},
	content: {
		padding: theme.spacing.md,
	},
	card: {
		backgroundColor: theme.colors.surface,
		borderRadius: theme.radius.md,
		borderWidth: 1,
		borderColor: theme.colors.border,
		padding: theme.spacing.lg,
	},
	title: {
		fontSize: theme.fontSize.xl,
		fontWeight: '700',
		color: theme.colors.textPrimary,
		textAlign: 'center',
		marginBottom: theme.spacing.sm,
	},
	subtitle: {
		fontSize: theme.fontSize.md,
		color: theme.colors.textSecondary,
		textAlign: 'center',
		lineHeight: 24,
	},
	listItem: {
		backgroundColor: theme.colors.surface,
		borderRadius: theme.radius.sm,
		borderWidth: 1,
		borderColor: theme.colors.border,
		paddingVertical: 12,
		paddingHorizontal: 14,
		marginBottom: theme.spacing.sm,
	},
	listItemText: {
		fontSize: theme.fontSize.md,
		color: theme.colors.textPrimary,
	},
	sectionHeader: {
		backgroundColor: '#e9effc',
		borderRadius: theme.radius.sm,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginTop: theme.spacing.sm,
		marginBottom: theme.spacing.xs,
	},
	sectionHeaderText: {
		fontSize: theme.fontSize.lg,
		fontWeight: '700',
		color: theme.colors.textPrimary,
	},
});

export default globalStyles;
