import React from 'react'
import ProjectsIndex from './Pages/ProjectsIndex'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ErrorPage from '../../../UIElements/ErrorPage'

export default function Projects(): JSX.Element {
	const match = useRouteMatch()
	return (
		<Switch>
			<Route path={match.path + '/'} exact>
				<ProjectsIndex />
			</Route>
			<Route path="*">
				<ErrorPage>Invalid Page</ErrorPage>
			</Route>
		</Switch>
	)
}
