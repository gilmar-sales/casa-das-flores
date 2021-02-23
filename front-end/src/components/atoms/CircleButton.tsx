import React from 'react'
import { IoSyncOutline } from 'react-icons/io5'

interface CircleButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	outlined?: boolean
	loading?: boolean
	icon: JSX.Element
}
const CircleButton: React.FC<CircleButtonProps> = ({
	outlined,
	loading,
	icon,
	className,
	...props
}) => {
	return (
		<button
			className={`${
				outlined ? 'border border-gray-300' : 'bg-green-500'
			} p-2 rounded-full ${className}`}
			{...props}
		>
			{loading ? <IoSyncOutline className='h-6 w-6 animate-spin' /> : icon}
		</button>
	)
}

export default CircleButton
