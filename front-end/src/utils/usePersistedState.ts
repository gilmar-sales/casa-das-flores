import { useState, useEffect } from 'react'

function usePersistedState<T>(
	key: string,
	initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [state, setState] = useState<T>(() => {
		const storageValue = localStorage.getItem(key)

		if (storageValue) {
			return JSON.parse(storageValue) as T
		} else {
			return initialState as T
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}

export default usePersistedState
