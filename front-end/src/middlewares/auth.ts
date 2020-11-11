export const TOKEN_KEY = '@casa-das-flores-Token'
export const NAME_KEY = '@name'
export const LAST_NAME_KEY = '@lastName'
export const PROFILE_PICTURE_KEY = '@profile-picture'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (data: any) => {
	console.log(data.user)
	localStorage.setItem(TOKEN_KEY, data.token)
	localStorage.setItem(NAME_KEY, data.user.firstName)
	localStorage.setItem(LAST_NAME_KEY, data.user.lastName)
	localStorage.setItem(PROFILE_PICTURE_KEY, data.user.profilePicture)
}

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(NAME_KEY)
	localStorage.removeItem(LAST_NAME_KEY)
	localStorage.removeItem(PROFILE_PICTURE_KEY)
}
