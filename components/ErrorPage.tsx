import React from 'react'
import { Status } from './Status'

const ErrorPage: React.FC = ({ children }) => {
	return <Status>Error: {children}</Status>
}
export default ErrorPage
