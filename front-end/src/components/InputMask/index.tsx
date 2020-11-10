import { Input } from 'antd'
import React, { forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'

interface IProps {
	mask: string
	maskChar: string
	formatChars: object
	alwaysShowMask: boolean
	inputRef: any
	disabled: boolean
}
/*
const InputMask = forwardRef((props: IProps, ref) => {
	return (
		<ReactInputMask {...props}>
			{(inputProps: any) => (
				<Input
					{...inputProps}
					ref={ref}
					disabled={props.disabled ? props.disabled : null}
				/>
			)}
		</ReactInputMask>
	)
})
export default InputMask
*/
