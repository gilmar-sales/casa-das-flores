import React from 'react'
import { Redirect } from 'react-router-dom'

export default function SignOut() {
	return (
		<div>
			<Redirect to={{ pathname: '/' }}></Redirect>
		</div>
	)
}
