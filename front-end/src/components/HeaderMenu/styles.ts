import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		sectionDesktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		sectionMobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		search: {
			marginRight: theme.spacing(2),
			'& svg': {
				color: 'white',
			},
			'& label': {
				color: 'white',
			},
			'& label.Mui-focused': {
				color: 'white',
			},
			'& .MuiOutlinedInput-root': {
				color: 'white',
				'& fieldset': {
					borderColor: 'white',
				},
				'&:hover fieldset': {
					borderColor: 'white',
				},
				'&.Mui-focused fieldset': {
					borderColor: 'white',
				},
			},
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: theme.spacing(4),
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
		userArea: {
			gridArea: 'header',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		userPanel: {
			fontSize: '1.5rem important',
		},
	})
)
