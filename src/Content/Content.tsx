import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import CoolThings from './Pages/CoolThings'

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<Switch>
					<Route path="/projects" component={Projects} />
					<Route path="/" exact component={Home} />
					<Route path="/cool-things" component={CoolThings} />
				</Switch>
			</div>
		)
	}
}
export default Content
