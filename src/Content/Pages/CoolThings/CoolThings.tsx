import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import McRide from './Pages/McRide'
import ErrorPage from '../../../UIElements/ErrorPage'
import CoolThingsIndex from './Pages/CoolThingsIndex'

export default function CoolThings(): JSX.Element {
	const match = useRouteMatch()
	return (
		<Switch>
			<Route path={match.path + '/mc-ride'}>
				<McRide />
			</Route>
			<Route path={match.path + '/'} exact>
				<CoolThingsIndex />
			</Route>
			<Route path="*">
				<ErrorPage>Invalid Page</ErrorPage>
			</Route>
		</Switch>
	)
}
