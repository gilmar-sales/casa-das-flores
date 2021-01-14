export const TOKEN_KEY = '@casa-das-flores-Token'
export const NAME_KEY = '@name'
export const LAST_NAME_KEY = '@lastName'
export const PROFILE_PICTURE_KEY = '@profile-picture'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (data: any) => {
	localStorage.setItem(TOKEN_KEY, data.token)
}

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY)
}
