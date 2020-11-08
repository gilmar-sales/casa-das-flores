import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

interface ContextProps {
	isAccountModalVisible: boolean
	setAccountModalVisible: Dispatch<SetStateAction<boolean>>
	modalValue: string
	setModalValue: Dispatch<SetStateAction<string>>
}

const NavBarContext = createContext<ContextProps>({} as ContextProps)

export const NavBarProvider: React.FC = ({ children }) => {
	const [isAccountModalVisible, setAccountModalVisible] = useState(false)
	const [modalValue, setModalValue] = useState('sign-in')

	return (
		<NavBarContext.Provider
			value={{
				isAccountModalVisible,
				setAccountModalVisible,
				modalValue,
				setModalValue,
			}}
		>
			{children}
		</NavBarContext.Provider>
	)
}
export default NavBarContext
