import React from 'react'

export default function Overview() {
	return (
		<div>
			<h1 className='text-2xl text-green-500  font-bold mb-4'>Visão Geral</h1>
			<div className='grid grid-cols-6 w-full gap-8'>
				<div className='border rounded-md p-4 col-span-6 md:col-span-4'>
					<h2 className='text-green-500 text-xl'>Hoje</h2>
				</div>
				<div className='flex flex-col justify-between border rounded-md p-4 col-span-6 md:col-span-2'>
					<h2 className='text-green-500 text-xl'>Depósitos Recentes</h2>
					<div>
						<span className='text-3xl'>R$ 3000,00</span>
						<br></br>
						<span className='text-gray-500'>em 30/01/2021</span>
					</div>
				</div>
				<div className='border rounded-md p-4 col-span-6 md:col-span-6'>
					<h2 className='text-green-500 text-xl'>Pedidos Recentes</h2>
					<div className='overflow-auto'>
						<table className='w-full'>
							<thead>
								<tr className='border-b mb-4'>
									<th>Data</th>
									<th>Nome</th>
									<th>Enviado para</th>
									<th>Método de pagamento</th>
									<th>Valor da compra</th>
								</tr>
							</thead>
							<tbody>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
								<tr className='py-4'>
									<td>16/03/2020</td>
									<td className='text-center'>Elvis</td>
									<td className='text-center'>Goiânia, GO</td>
									<td className='text-center'>VISA ⠀•••• 3719</td>
									<td className='text-right'>R$ 3024,00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
