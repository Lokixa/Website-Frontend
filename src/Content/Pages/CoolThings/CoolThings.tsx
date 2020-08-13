import React from 'react'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import { Status } from '../../../UIElements/Status'
import McRide from './Links/McRide'

export default function CoolThings(): JSX.Element {
	const match = useRouteMatch()
	return (
		<Switch>
			<Route path={match.path + '/mc-ride'}>
				<McRide />
			</Route>
			<Route path={match.path + '/'} exact>
				<Status>
					Will be a collection of things I find interesting
				</Status>
			</Route>
			<Route path="*">
				<Redirect to={match.path} exact />
			</Route>
		</Switch>
	)
}
