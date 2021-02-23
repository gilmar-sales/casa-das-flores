import React from 'react'

interface BadgeProps {
	content?: any
}

const Badge: React.FC<BadgeProps> = ({ children, content }) => {
	return (
		<div className='relative'>
			{Boolean(content) && (
				<div className='absolute top-0 left-0 bg-red-500 text-center text-xs w-4 h-4 rounded-full'>
					{content}
				</div>
			)}
			{children}
		</div>
	)
}

export default Badge
