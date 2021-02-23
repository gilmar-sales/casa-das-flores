import React from 'react'
import { IoSyncOutline } from 'react-icons/io5'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	roudend?: boolean
	outlined?: boolean
	loading?: boolean
	icon: JSX.Element
	text: string
}

const Button: React.FC<ButtonProps> = ({
	roudend,
	outlined,
	loading,
	icon,
	text,
	className,
	...props
}) => {
	return (
		<button
			className={`${className} ${
				outlined
					? 'border-2 border-green-500 text-green-500 hover:border-green-600 hover:text-green-600 focus:border-4'
					: 'bg-green-500 hover:bg-green-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
			}
			${roudend && 'rounded-md'}
			relative flex justify-center py-2 px-4 text-sm font-medium focus:outline-none `}
			{...props}
		>
			<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
				{loading && icon ? <IoSyncOutline className='animate-spin' /> : [icon]}
			</span>
			{text}
		</button>
	)
}

export default Button
