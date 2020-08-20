import React from 'react'
import {
	FiSearch,
	FiMessageSquare,
	FiUser,
	FiShoppingBag,
	FiMoreVertical,
	FiMenu,
	FiHeart,
} from 'react-icons/fi'

import { useStyles } from './styles'

import {
	Tooltip,
	Badge,
	BottomNavigation,
	BottomNavigationAction,
	TextField,
	InputAdornment,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	AppBar,
	Toolbar,
	Grid,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@material-ui/core'

export default function () {
	const styles = useStyles()

	const [value, setValue] = React.useState('recents')
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [
		mobileMoreAnchorEl,
		setMobileMoreAnchorEl,
	] = React.useState<null | HTMLElement>(null)
	const [isDrawerOpen, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleAccountMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleAccountMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}
	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const menuItems = [
		'Tipos de Flores',
		'Buquês de Flores',
		'Arranjo de Flores',
		'Vasos de Flores',
		'Ocasiões',
		'Presentes Especiais',
		'Produtos Exclusivos',
	]

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleAccountMenuClose}
		>
			<MenuItem onClick={handleAccountMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleAccountMenuClose}>My account</MenuItem>
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton color='inherit'>
					<FiMessageSquare />
				</IconButton>
				<p>Suporte</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 11 new notifications' color='inherit'>
					<Badge badgeContent={1} color='secondary'>
						<FiHeart />
					</Badge>
				</IconButton>
				<p>Lista de desejos</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 11 new notifications' color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<FiShoppingBag />
					</Badge>
				</IconButton>
				<p>Cesta de compras</p>
			</MenuItem>
			<MenuItem onClick={handleAccountMenuOpen}>
				<IconButton
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<FiUser />
				</IconButton>
				<p>Conta</p>
			</MenuItem>
		</Menu>
	)

	// Categories menu changes handler
	function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
		setValue(newValue)
	}

	return (
		<div className={styles.grow}>
			<Grid container>
				<Grid item xl={3} />
				<Grid item xs={12} xl={6}>
					<AppBar position='relative'>
						<Toolbar>
							<div className={styles.sectionMobile}>
								<IconButton
									color='inherit'
									aria-label='open drawer'
									onClick={handleDrawerOpen}
									edge='start'
								>
									<FiMenu />
								</IconButton>
							</div>

							<div className={styles.sectionDesktop}>
								<Typography variant='h6' noWrap>
									Casa das Flores
								</Typography>
							</div>
							<div className={styles.grow} />
							<TextField
								classes={{
									root: styles.search,
								}}
								variant='outlined'
								size='small'
								label='Pesquisa'
								color='primary'
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<Tooltip title='Pesquisar'>
												<IconButton>
													<FiSearch />
												</IconButton>
											</Tooltip>
										</InputAdornment>
									),
								}}
							/>
							<div className={styles.grow} />
							<div className={styles.sectionDesktop}>
								<Tooltip title='Suporte'>
									<IconButton color='inherit'>
										<FiMessageSquare />
									</IconButton>
								</Tooltip>
								<Tooltip title='Lista de desejos'>
									<IconButton color='inherit'>
										<Badge
											badgeContent={4}
											color='secondary'
											anchorOrigin={{
												vertical: 'bottom',
												horizontal: 'right',
											}}
										>
											<FiHeart />
										</Badge>
									</IconButton>
								</Tooltip>
								<Tooltip title='Cesta de compras'>
									<IconButton color='inherit'>
										<Badge
											badgeContent={4}
											color='secondary'
											anchorOrigin={{
												vertical: 'bottom',
												horizontal: 'right',
											}}
										>
											<FiShoppingBag />
										</Badge>
									</IconButton>
								</Tooltip>
								<Tooltip title='Conta'>
									<IconButton
										color='inherit'
										aria-controls='account-menu'
										aria-haspopup='true'
										onClick={handleAccountMenuOpen}
									>
										<FiUser />
									</IconButton>
								</Tooltip>
							</div>
							<div className={styles.sectionMobile}>
								<IconButton
									aria-label='show more'
									aria-controls={mobileMenuId}
									aria-haspopup='true'
									onClick={handleMobileMenuOpen}
									color='inherit'
								>
									<FiMoreVertical />
								</IconButton>
								<Drawer
									anchor='left'
									open={isDrawerOpen}
									onClose={handleDrawerClose}
								>
									<Typography variant='h6' noWrap>
										Casa das Flores
									</Typography>
									<Divider />
									<List>
										{menuItems.map((text, index) => (
											<ListItem button key={text}>
												<ListItemText primary={text} />
											</ListItem>
										))}
									</List>
								</Drawer>
							</div>
						</Toolbar>
					</AppBar>
					{renderMobileMenu}
					{renderMenu}
					<div className={styles.sectionDesktop}>
						<Grid item xs={12}>
							<BottomNavigation
								value={value}
								onChange={handleChange}
								showLabels={true}
							>
								{menuItems.map((category) => (
									<BottomNavigationAction
										label={category}
										value={category.toLowerCase().split(' ').join('_')}
										key={category.toLowerCase().split(' ').join('_')}
									/>
								))}
							</BottomNavigation>
						</Grid>
					</div>
				</Grid>
				<Grid item xl={3}></Grid>
			</Grid>
		</div>
	)
}
