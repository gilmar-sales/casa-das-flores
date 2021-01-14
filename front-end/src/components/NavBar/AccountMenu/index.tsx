import React, { useContext, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { HiOutlineUser } from 'react-icons/hi'
import SignContext from '../../../contexts/SignContext'

import { isAuthenticated, logout } from '../../../middlewares/auth'
import { Link } from 'react-router-dom'
import { Profile } from '../../../@types/interfaces'
import api from '../../../middlewares/api'

export default function AccountMenu() {
	const ctx = useContext(SignContext)
	const [profile, setProfile] = useState({} as Profile)
	useEffect(() => {
		api.get('/customers/profile').then((response) => {
			setProfile(response.data)
			console.log(profile)
		})
	}, [])

	const signOut = () => {
		logout()
		window.location.href = '/'
	}

	const accountBtn = () => {
		if (isAuthenticated()) {
			if (profile.profilePicture) return <span>Pc</span>
			else
				return (
					<span className='uppercase'>
						{profile.firstName?.charAt(0) + profile.lastName?.charAt(0)}
					</span>
				)
		} else return <HiOutlineUser className='h-6 w-6' />
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
							{isAuthenticated() ? (
								<div className='py-1'>
									<Menu.Item>
										{({ active }) => (
											<Link
												className={`${
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
												} flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
												to='/profile'
											>
												Perfil
											</Link>
										)}
									</Menu.Item>
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
