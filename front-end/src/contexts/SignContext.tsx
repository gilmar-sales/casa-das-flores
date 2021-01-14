import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

interface ContextProps {
	showSignIn: boolean
	setShowSignIn: Dispatch<SetStateAction<boolean>>
	showSignUp: boolean
	setShowSignUp: Dispatch<SetStateAction<boolean>>
}

const SignContext = createContext<ContextProps>({} as ContextProps)

export const SignProvider: React.FC = ({ children }) => {
	const [showSignIn, setShowSignIn] = useState(false)
	const [showSignUp, setShowSignUp] = useState(false)

	return (
		<SignContext.Provider
			value={{
				showSignIn,
				setShowSignIn,
				showSignUp,
				setShowSignUp,
			}}
		>
			{children}
		</SignContext.Provider>
	)
}
export default SignContext
