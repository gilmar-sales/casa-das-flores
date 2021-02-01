import React from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

interface PaginationProps {
	numPages: number
	page: number
	setPage: (value: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
	numPages,
	page,
	setPage,
	...props
}) => {
	const maxCount = 5

	if (numPages <= maxCount) {
		return (
			<div className='w-full flex items-center justify-center my-2 text-green-500 gap-2'>
				<button
					className={`h-8 w-8 rounded-full border border-green-500 flex items-center justify-center ${
						page === 1 && 'opacity-50 cursor-default'
					}`}
					onClick={() => setPage(page > 1 ? page - 1 : 1)}
				>
					<IoChevronBackOutline />
				</button>
				{[...Array(numPages)].map((value, index) => (
					<button
						className={`h-8 w-8 rounded-full border border-green-500 ${
							page === index + 1 && 'bg-green-500 text-white'
						}`}
						onClick={() => setPage(index + 1)}
					>
						{index + 1}
					</button>
				))}

				<button
					className={`h-8 w-8 rounded-full border border-green-500 flex items-center justify-center ${
						page === numPages && 'opacity-50 cursor-default'
					}`}
					onClick={() => setPage(page < numPages ? page + 1 : numPages)}
				>
					<IoChevronForwardOutline />
				</button>
			</div>
		)
	} else
		return (
			<div className='w-full flex items-center justify-center my-2 text-green-500 gap-2'>
				<button
					className={`h-8 w-8 rounded-full border border-green-500 flex items-center justify-center ${
						page === 1 && 'opacity-50 cursor-default'
					}`}
					onClick={() => setPage(page > 1 ? page - 1 : 1)}
				>
					<IoChevronBackOutline />
				</button>
				<button
					className={`h-8 w-8 rounded-full border border-green-500 ${
						page === 1 && 'bg-green-500 text-white'
					}`}
					onClick={() => setPage(1)}
				>
					1
				</button>
				<span className={page > 3 ? 'block' : 'hidden'}>...</span>
				{[...Array(3)].map((value, index) => {
					if (page <= 3) {
						return (
							<button
								className={`h-8 w-8 rounded-full border border-green-500 ${
									page === index + 2 && 'bg-green-500 text-white'
								}`}
								onClick={() => setPage(index + 2)}
							>
								{index + 2}
							</button>
						)
					}
					if (page > numPages - 3) {
						return (
							<button
								className={`h-8 w-8 rounded-full border border-green-500 ${
									page === numPages - 3 + index && 'bg-green-500 text-white'
								}`}
								onClick={() => setPage(numPages - 3 + index)}
							>
								{numPages - 3 + index}
							</button>
						)
					} else
						return (
							<button
								className={`h-8 w-8 rounded-full border border-green-500 ${
									page === page + index - 1 && 'bg-green-500 text-white'
								}`}
								onClick={() => setPage(page + index - 1)}
							>
								{page + index - 1}
							</button>
						)
				})}
				<span className={page < numPages - 2 ? 'block' : 'hidden'}>...</span>

				<button
					className={`h-8 w-8 rounded-full border border-green-500 ${
						page === numPages && 'bg-green-500 text-white'
					}`}
					onClick={() => setPage(numPages)}
				>
					{numPages}
				</button>

				<button
					className={`h-8 w-8 rounded-full border border-green-500 flex items-center justify-center ${
						page === numPages && 'opacity-50 cursor-default'
					}`}
					onClick={() => setPage(page < numPages ? page + 1 : numPages)}
				>
					<IoChevronForwardOutline />
				</button>
			</div>
		)
}

export default Pagination
