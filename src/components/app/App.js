import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from '../homepage'
import CaseStudy from '../casestudy'

function App({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/casestudy" render={props => <CaseStudy {...props} />} />
			</Switch>
		</Router>
	)
}

export default App
