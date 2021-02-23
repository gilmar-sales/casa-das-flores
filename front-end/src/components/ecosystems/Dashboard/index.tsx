import React, { useState } from 'react'

import {
	IoAlbumsOutline,
	IoBagHandleOutline,
	IoChevronBackOutline,
	IoChevronForwardOutline,
	IoCubeOutline,
	IoExitOutline,
	IoMegaphoneOutline,
	IoNotificationsOutline,
	IoOptionsOutline,
	IoPeopleOutline,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Dashboard: React.FC<{}> = (props) => {
	const [sideIsOpen, setSideOpen] = useState(false)

	const SideBar: React.FC<{}> = () => {
		return (
			<div className='text-white'>
				<button
					className='h-14 w-full flex items-center justify-end hover:bg-green-600 px-2 rounded-none border-b border-green-600'
					onClick={() => setSideOpen(!sideIsOpen)}
				>
					{sideIsOpen ? (
						<IoChevronBackOutline size={32} />
					) : (
						<IoChevronForwardOutline size={32} />
					)}
				</button>
				<div className='mt-10 font-bold w-52'>
					<Link
						to='/dashboard'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoOptionsOutline className='mr-8' size={32} />
						<span>Painel</span>
					</Link>
					<Link
						to='/dashboard/customers'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoPeopleOutline className='mr-8' size={32} />
						<span>Clientes</span>
					</Link>
					<Link
						to='/dashboard/sales'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoBagHandleOutline className='mr-8' size={32} />
						<span>Vendas</span>
					</Link>
					<Link
						to='/dashboard/orders'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoCubeOutline className='mr-8' size={32} />
						<span>Pedidos</span>
					</Link>
					<Link
						to='/dashboard/products'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoAlbumsOutline className='mr-8' size={32} />
						<span>Produtos</span>
					</Link>
					<Link
						to='/dashboard/announcements'
						className='w-full flex items-center hover:bg-green-700 py-2 px-2 rounded-none'
					>
						<IoMegaphoneOutline className='mr-8' size={32} />
						<span>Anúncios</span>
					</Link>
				</div>
			</div>
		)
	}
	return (
		<div className='flex flex-row justify-end min-h-screen'>
			<div
				className='flex flex-col overflow-hidden bg-green-500 border border-green-600 transition-width duration-300'
				style={{
					width: sideIsOpen ? '13rem' : '3rem',
				}}
			>
				<SideBar />
			</div>
			<div
				className='flex flex-col transition-width duration-300'
				style={{
					width: sideIsOpen ? 'calc(100% - 13rem)' : 'calc(100% - 3rem)',
				}}
			>
				<div className='h-14 border shadow flex flex-row-reverse gap-4 items-center px-4 text-2xl text-white'>
					<Link to='/' className='bg-green-500 rounded-full p-2 relative'>
						<IoExitOutline />
					</Link>
					<button className='bg-green-500 rounded-full p-2 relative'>
						<IoNotificationsOutline />
						<div className='absolute top-0 left-0 bg-red-500 text-xs w-4 h-4 rounded-full'>
							1
						</div>
					</button>
				</div>
				<div className='flex-grow p-4'>{props.children}</div>
			</div>
		</div>
	)
}

export default Dashboard
