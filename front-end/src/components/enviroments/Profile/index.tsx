import React, { useContext } from 'react'

import SignContext from '../../../contexts/SignContext'

export default function Profile() {
	const ctx = useContext(SignContext)
	return (
		<div className='grid grid-cols-6 gap-4 px-4'>
			{/* Menu */}
			<div className='col-span-6 sm:col-span-1 rounded-md border py-2'>
				Menu
			</div>
			{/* Profile */}
			<div className='col-span-6 sm:col-span-5 rounded-md border p-2'>
				<div className='grid grid-cols-6'>
					<div className='col-span-6 md:col-span-2'>
						<div className='flex justify-center items-center rounded-full bg-green-500 text-white h-16 w-16 text-2xl select-none'>
							{ctx.profile.firstName?.charAt(0) +
								ctx.profile.lastName?.charAt(0)}
						</div>
						<div>{`${ctx.profile.firstName} ${ctx.profile.lastName}`}</div>
					</div>
					<div className='col-span-6 md:col-span-4 grid grid-cols-2'>
						<div className='col-span-2 sm:col-span-1'>Telefone</div>
						<div className='col-span-2 sm:col-span-1'>Cidade</div>
						<div className='col-span-2 sm:col-span-2'>Endereço</div>
					</div>
				</div>
				<div className='w-full h-1 border-b' />
				<div className='grid grid-cols-5 pt-4 gap-4'>
					<div className='col-span-5 sm:col-span-2 md:col-span-1 flex items-center flex-col '>
						<span className='text-3xl font-bold'>0</span>
						<span className='text-center'>Total de Pedidos</span>
					</div>
					<div className='col-span-5 sm:col-span-2 md:col-span-1 flex items-center flex-col'>
						<span className='text-3xl font-bold '>0</span>
						<span className='text-center'>Pagamentos Pendentes</span>
					</div>
					<div className='col-span-5 sm:col-span-2 md:col-span-1 flex items-center flex-col'>
						<span className='text-3xl font-bold'>0</span>
						<span className='text-center'>Envios Pendentes</span>
					</div>
					<div className='col-span-5 sm:col-span-2 md:col-span-1 flex items-center flex-col'>
						<span className='text-3xl font-bold'>0</span>
						<span className='text-center'>Aguardando Entrega</span>
					</div>
					<div className='col-span-5 sm:col-span-2 md:col-span-1  flex items-center flex-col'>
						<span className='text-3xl font-bold'>0</span>
						<span className='text-center'>Avaliações Pendentes</span>
					</div>
				</div>
			</div>
		</div>
	)
}
