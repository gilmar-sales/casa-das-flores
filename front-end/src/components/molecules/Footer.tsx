import React from 'react'

const Footer: React.FC<{}> = (props) => {
	return (
		<div className='flex justify-center border-dashed border-t-2 border-green-100 p-8'>
			<div
				className='flex flex-grow justify-between'
				style={{ maxWidth: 1330 }}
			>
				<span>© 2020 Casa das Flores.</span>
				<span>
					Feito por{' '}
					<a
						href='http://gilmarxd.github.io/'
						target='blank'
						className='text-green-500'
					>
						Gilmar Custodio
					</a>
				</span>
			</div>
		</div>
	)
}

export default Footer
