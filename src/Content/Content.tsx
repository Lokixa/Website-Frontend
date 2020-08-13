import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Projects from './Pages/Projects/Projects'
import Home from './Pages/Home/Home'
import CoolThings from './Pages/CoolThings/CoolThings'

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<Switch>
					<Route path="/projects" component={Projects} />
					<Route path="/" exact component={Home} />
					<Route path="/cool-things" component={CoolThings} />
					<Route path="*">
						<Redirect to="/" exact />
					</Route>
				</Switch>
			</div>
		)
	}
}
export default Content
