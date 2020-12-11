import React, { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
	HiOutlineChatAlt,
	HiOutlineHeart,
	HiOutlineShoppingBag,
	HiSearch,
	HiOutlineUser,
	HiLockClosed,
} from 'react-icons/hi'

import {
	isAuthenticated,
	logout,
	NAME_KEY,
	LAST_NAME_KEY,
	PROFILE_PICTURE_KEY,
} from '../../middlewares/auth'
import { useHistory } from 'react-router-dom'

import ReactTooltip from 'react-tooltip'
import Modal from '../Modal'
import Logo from '../../icons/Logo'

export default function (props: { children: any }) {
	const history = useHistory()

	const [searchText, setSearchText] = useState('')
	const [showAccDropdown, setShowAccDropDown] = useState(false)
	const [showSignIn, setShowSignIn] = useState(false)
	const [showSignUp, setShowSignUp] = useState(false)

	const handleAccount = () => {
		setShowAccDropDown(!showAccDropdown)
	}

	return (
		<div>
			<ReactTooltip place='bottom' effect='solid' globalEventOff='hover' />
			<nav className='flex justify-between py-2 text-green-500 border-dashed md:border-b-2 border-green-100 '>
				{/* Brand Section*/}
				<div className='flex items-center px-2 sm:px-4 lg:px-6'>
					<a
						className='flex flex-row justify-between items-center cursor-pointer'
						onClick={() => history.push('/')}
					>
						<Logo className='h-10 w-10 text-green-500' />
						<a className='hidden md:block ml-2'>Casa das Flores</a>
					</a>
				</div>
				{/* Mid Section */}
				<div className='flex items-center hidden sm:block'>
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
							<HiSearch className='h-6 w-6' />
						</button>
					</div>
				</div>
				{/* Right Section*/}
				<div className='flex px-2 sm:px-4 lg:px-6 space-x-2 text-white select-none'>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full '
						data-tip='Suporte'
					>
						<HiOutlineChatAlt className='h-6 w-6' />
					</button>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full '
						data-tip='Desejos'
					>
						<HiOutlineHeart className='h-6 w-6' />
					</button>
					<button
						className='bg-green-500 h-10 w-10 p-2 rounded-full'
						data-tip='Cesta'
					>
						<HiOutlineShoppingBag className='h-6 w-6' />
					</button>
					<div className='relative'>
						<Menu>
							{({ open }) => (
								<>
									<Menu.Button
										className='bg-green-500 h-10 w-10 p-2 rounded-full'
										data-tip='Conta'
									>
										<HiOutlineUser className='h-6 w-6' />
									</Menu.Button>
									<Transition
										show={open}
										enter='transition ease-out duration-200'
										enterFrom='transform opacity-0 scale-50'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-150'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-50'
									>
										<Menu.Items
											static
											className='absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
										>
											<div className='py-1'>
												<Menu.Item>
													{({ active }) => (
														<a
															className={`${
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700'
															} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
															onClick={() => setShowSignIn(true)}
														>
															Entrar
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															className={`${
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700'
															} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
															onClick={() => setShowSignUp(true)}
														>
															Inscrever-se
														</a>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</>
							)}
						</Menu>
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
						<HiSearch className='h-6 w-6' />
					</button>
				</form>
			</div>
			<Modal title='Entrar' isOpen={showSignIn} setOpen={setShowSignIn}>
				<div className='flex flex-col items-center'>
					<Logo className='h-16 w-16 stroke-current text-green-600' />
					<a className='text-center text-3xl font-extrabold text-gray-900'>
						Entre com seus dados
					</a>
					<p className='mt-2 text-center text-sm text-gray-600'>
						{'Ou '}
						<a
							href='#'
							className='font-medium text-green-600 hover:text-green-500'
						>
							entre com google
						</a>
					</p>
				</div>
				<form className='mt-8 space-y-6' action='#' method='POST'>
					<input type='hidden' name='remember' value='true' />
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								E-mail
							</label>
							<input
								id='email-address'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='E-mail'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Senha
							</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Senha'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember_me'
								name='remember_me'
								type='checkbox'
								className='h-5 w-5 rounded text-green-600 border-green-400 focus:ring-green-600'
							/>
							<label
								htmlFor='remember_me'
								className='ml-2 block text-sm text-gray-900'
							>
								Lembrar dados
							</label>
						</div>

						<div className='text-sm'>
							<a
								href='#'
								className='font-medium text-green-600 hover:text-green-500'
							>
								Esqueceu sua senha?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<HiLockClosed />
							</span>
							Entrar
						</button>
					</div>
				</form>
			</Modal>

			<Modal title='Inscrever-se' isOpen={showSignUp} setOpen={setShowSignUp}>
				<form className='mt-8 space-y-6' action='#' method='POST'>
					<input type='hidden' name='remember' value='true' />
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								E-mail
							</label>
							<input
								id='email-address'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='E-mail'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Senha
							</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Senha'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember_me'
								name='remember_me'
								type='checkbox'
								className='h-5 w-5 text-gray-600'
							/>
							<label
								htmlFor='remember_me'
								className='ml-2 block text-sm text-gray-900'
							>
								Lembrar dados
							</label>
						</div>

						<div className='text-sm'>
							<a
								href='#'
								className='font-medium text-green-600 hover:text-green-500'
							>
								Esqueceu sua senha?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<HiLockClosed />
							</span>
							Inscrever-se
						</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
