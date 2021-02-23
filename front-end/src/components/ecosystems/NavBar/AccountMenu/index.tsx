import React, { useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { IoPersonOutline } from 'react-icons/io5'

import SignContext from '../../../../contexts/SignContext'

import { IsAuthenticated, logout } from '../../../../middlewares/auth'
import { Link } from 'react-router-dom'

export default function AccountMenu() {
	const ctx = useContext(SignContext)

	const signOut = () => {
		logout()
		window.location.href = '/'
	}

	const accountBtn = () => {
		if (IsAuthenticated()) {
			if (ctx.profile.profilePicture) return <span>Pc</span>
			else
				return (
					<span className='uppercase'>
						{ctx.profile.firstName?.charAt(0) +
							ctx.profile.lastName?.charAt(0) || (
							<IoPersonOutline className='h-6 w-6' />
						)}
					</span>
				)
		} else return <IoPersonOutline className='h-6 w-6' />
	}

	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button
						className='bg-green-500 h-10 w-10 p-2 rounded-full'
						data-tip='Conta'
					>
						{accountBtn}
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
							className='absolute z-20 right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
						>
							{IsAuthenticated() ? (
								<div className='py-1'>
									<Menu.Item>
										{({ active }) => (
											<Link
												className={`${
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
												to='/store/profile'
											>
												Perfil
											</Link>
										)}
									</Menu.Item>
									{ctx.profile.role === 'admin' && (
										<Menu.Item>
											{({ active }) => (
												<Link
													className={`${
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700'
													} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
													to='/dashboard'
												>
													Painel Administrativo
												</Link>
											)}
										</Menu.Item>
									)}
									<Menu.Item>
										{({ active }) => (
											<span
												className={`${
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
												onClick={signOut}
											>
												Sair
											</span>
										)}
									</Menu.Item>
								</div>
							) : (
								<div className='py-1'>
									<Menu.Item>
										{({ active }) => (
											<span
												className={`${
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
												onClick={() => ctx.setShowSignIn(true)}
											>
												Entrar
											</span>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<span
												className={`${
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
												onClick={() => ctx.setShowSignUp(true)}
											>
												Inscrever-se
											</span>
										)}
									</Menu.Item>
								</div>
							)}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	)
}
