import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			[theme.breakpoints.up('sm')]: {
				maxWidth: 345,
			},
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		addToBag: {
			marginLeft: 'auto',
		},
		avatar: {
			backgroundColor: red[500],
		},
	})
)
