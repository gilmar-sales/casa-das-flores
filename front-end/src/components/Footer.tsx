import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC<{}> = (props) => {
	return (
		<div className='flex items-center justify-between border-dashed border-t-2 border-green-100 p-8'>
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
	)
}

export default Footer
