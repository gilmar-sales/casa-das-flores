import React from 'react'
import {
	FiSearch,
	FiMessageSquare,
	FiUser,
	FiShoppingBag,
	FiMoreVertical,
	FiMenu,
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
} from '@material-ui/core'

export default function () {
	const styles = useStyles()
	const [value, setValue] = React.useState('recents')
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [
		mobileMoreAnchorEl,
		setMobileMoreAnchorEl,
	] = React.useState<null | HTMLElement>(null)

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
		setValue(newValue)
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}
	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
				<IconButton aria-label='show 4 new mails' color='inherit'>
					<FiMessageSquare />
				</IconButton>
				<p>Suporte</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<FiUser />
				</IconButton>
				<p>Conta</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 11 new notifications' color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<FiShoppingBag />
					</Badge>
				</IconButton>
				<p>Cesta</p>
			</MenuItem>
		</Menu>
	)

	return (
		<div className={styles.grow}>
			<Grid container>
				<Grid item xl={3} />
				<Grid item xs={12} xl={6}>
					<AppBar position='relative'>
						<Toolbar>
							<div className={styles.sectionMobile}>
								<IconButton
									aria-label='show more'
									aria-controls={mobileMenuId}
									aria-haspopup='true'
									onClick={handleMobileMenuOpen}
									color='inherit'
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
								label='Pesquise um produto'
								color='primary'
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<Tooltip title='Pesquisar'>
												<IconButton
													type='submit'
													aria-label='large outlined primary button group'
												>
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

								<Tooltip title='Conta'>
									<IconButton
										color='inherit'
										aria-controls='account-menu'
										aria-haspopup='true'
										onClick={handleClick}
									>
										<FiUser />
									</IconButton>
								</Tooltip>
								<Tooltip title='Cesta'>
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
								<Drawer anchor='left'></Drawer>
							</div>
						</Toolbar>
					</AppBar>
					{renderMobileMenu}
					{renderMenu}
					<div className={styles.sectionDesktop}>
						<Grid item xs={12} xl={6}>
							<BottomNavigation
								value={value}
								onChange={handleChange}
								showLabels={true}
							>
								<BottomNavigationAction label='Tipos de Flores' value='tipos' />
								<BottomNavigationAction
									label='Buquês de Flores'
									value='buques'
								/>
								<BottomNavigationAction
									label='Arranjo de Flores'
									value='arranjos'
								/>
								<BottomNavigationAction label='Flores em Vasos' value='vasos' />
								<BottomNavigationAction label='Ocasiões' value='ocasioes' />
								<BottomNavigationAction
									label='Presentes Especiais'
									value='especiais'
								/>
								<BottomNavigationAction
									label='Produtos Exclusivos'
									value='exclusivos'
								/>
							</BottomNavigation>
						</Grid>
					</div>
				</Grid>
				<Grid item xl={3}></Grid>
			</Grid>
		</div>
	)
}
