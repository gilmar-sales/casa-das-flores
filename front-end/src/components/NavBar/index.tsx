import React, { useContext, useState } from 'react'

import {
	IoChatboxEllipsesOutline,
	IoHeartOutline,
	IoBagHandleOutline,
	IoSearchOutline,
} from 'react-icons/io5'

import { Link } from 'react-router-dom'

import ReactTooltip from 'react-tooltip'
import Modal from '../Modal'
import Logo from '../../icons/Logo'
import SignIn from '../forms/SignIn'
import SignUp from '../forms/SignUp'

import AccountMenu from './AccountMenu'
import SignContext from '../../contexts/SignContext'

export default function NavBar(props: { children: any }) {
	const [searchText, setSearchText] = useState('')
	const ctx = useContext(SignContext)

	return (
		<div>
			<ReactTooltip place='bottom' effect='solid' globalEventOff='click' />
			<nav className='flex justify-between py-2 text-green-500 border-dashed sm:border-b-2 border-green-100 '>
				{/* Brand Section*/}
				<div className='flex items-center px-2 sm:px-4 lg:px-6'>
					<Link
						className='flex flex-row justify-between items-center cursor-pointer'
						to='/store'
					>
						<Logo className='h-10 w-10 text-green-500' />
						<span className='hidden md:block ml-2'>Casa das Flores</span>
					</Link>
				</div>
				{/* Mid Section */}
				<div className=' hidden sm:flex items-center '>
					<div className='flex'>
						<input
							type='text'
							name='search'
							id='search'
							className='w-full px-3 border rounded-none rounded-l-md border-gray-400 focus:ring-0'
							placeholder='Procurando alguma coisa?'
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
						<button className='px-4 py-1 rounded-r-md border border-l-0 border-green-500 bg-green-50 hover:bg-green-400 hover:text-white'>
							<IoSearchOutline className='h-6 w-6' />
						</button>
					</div>
				</div>
				{/* Right Section*/}
				<div className='flex px-2 sm:px-4 lg:px-6 space-x-2 text-white select-none'>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full '
						data-tip='Suporte'
					>
						<IoChatboxEllipsesOutline className='h-6 w-6' />
					</button>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full '
						data-tip='Desejos'
					>
						<IoHeartOutline className='h-6 w-6' />
					</button>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full'
						data-tip='Cesta'
					>
						<IoBagHandleOutline className='h-6 w-6' />
					</button>
					<div className='relative'>
						<AccountMenu />
					</div>
				</div>
			</nav>
			{/* Mobile Section */}
			<div className='flex justify-center sm:hidden  text-green-500 py-2 border-dashed border-b-2 border-green-100'>
				<form className='flex' action='#' method='POST'>
					<input
						type='text'
						name='company_website'
						id='company_website'
						className='flex-1 w-full px-3 border  rounded-none rounded-l-md border-gray-400 focus:ring-0'
						placeholder='Procurando alguma coisa?'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button className='px-4 py-1 rounded-r-md border border-l-0 border-green-500 bg-green-50 hover:bg-green-400 hover:text-green-50'>
						<IoSearchOutline className='h-6 w-6' />
					</button>
				</form>
			</div>
			<Modal title='Entrar' isOpen={ctx.showSignIn} setOpen={ctx.setShowSignIn}>
				<SignIn />
			</Modal>

			<Modal
				title='Inscrever-se'
				isOpen={ctx.showSignUp}
				setOpen={ctx.setShowSignUp}
			>
				<SignUp />
			</Modal>
			{props.children}
		</div>
	)
}
