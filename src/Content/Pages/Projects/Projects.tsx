import React from 'react'
import ProjectCards from './ProjectCards'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

export default function Projects(): JSX.Element {
	const match = useRouteMatch()
	return (
		<Switch>
			<Route path={match.path + '/'} exact>
				<ProjectCards />
			</Route>
			<Route path="*">
				<Redirect to={match.path} />
			</Route>
		</Switch>
	)
}
