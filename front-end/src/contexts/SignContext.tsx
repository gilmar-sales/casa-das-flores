import React, {
	createContext,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react'
import { Profile } from '../@types/interfaces'
import api from '../middlewares/api'
import { IsAuthenticated } from '../middlewares/auth'

interface ContextProps {
	showSignIn: boolean
	setShowSignIn: Dispatch<SetStateAction<boolean>>
	showSignUp: boolean
	setShowSignUp: Dispatch<SetStateAction<boolean>>
	profile: Profile
	setProfile: React.Dispatch<React.SetStateAction<Profile>>
}

const SignContext = createContext<ContextProps>({} as ContextProps)

export const SignProvider: React.FC = ({ children }) => {
	const [showSignIn, setShowSignIn] = useState(false)
	const [showSignUp, setShowSignUp] = useState(false)
	const [profile, setProfile] = useState({} as Profile)

	useEffect(() => {
		if (IsAuthenticated())
			api.get('/customers/profile').then((response) => {
				setProfile(response.data)
			})
	}, [])

	return (
		<SignContext.Provider
			value={{
				showSignIn,
				setShowSignIn,
				showSignUp,
				setShowSignUp,
				profile,
				setProfile,
			}}
		>
			{children}
		</SignContext.Provider>
	)
}
export default SignContext
