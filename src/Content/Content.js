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
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cool-things">
                        <CoolThings />
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default Content