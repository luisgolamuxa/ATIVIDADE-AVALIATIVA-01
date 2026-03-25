import { StyleSheet } from 'react-native';
import theme from './theme';

const modalStyles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing.lg,
		backgroundColor: theme.colors.background,
	},
	headerText: {
		fontSize: theme.fontSize.lg,
		fontWeight: '700',
		color: theme.colors.textPrimary,
		marginBottom: theme.spacing.md,
		textAlign: 'center',
	},
	mainButton: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: theme.radius.sm,
	},
	buttonText: {
		color: theme.colors.primaryText,
		fontSize: theme.fontSize.md,
		fontWeight: '700',
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing.md,
	},
	modalCard: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.colors.surface,
		borderRadius: theme.radius.md,
		borderWidth: 1,
		borderColor: theme.colors.border,
		padding: theme.spacing.lg,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: theme.fontSize.lg,
		color: theme.colors.textPrimary,
		fontWeight: '700',
		marginBottom: theme.spacing.sm,
	},
	modalBody: {
		fontSize: theme.fontSize.md,
		color: theme.colors.textSecondary,
		textAlign: 'center',
		marginBottom: theme.spacing.md,
	},
	closeButton: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: theme.radius.sm,
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	closeButtonText: {
		color: theme.colors.textPrimary,
		fontWeight: '600',
		fontSize: theme.fontSize.sm,
	},
});

export default modalStyles;
