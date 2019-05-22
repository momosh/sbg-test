import React from 'react'
import styled from 'styled-components'
import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home, Tasks, TasksDetails } from './components'

const StyledContainer = styled(Container)`
	margin-top: 25px;
`

function App() {
	return (
		<StyledContainer>
			<Menu pointing>
				<Menu.Item name="projects" />
				<Menu.Item name="data" />
				<Menu.Item name="Public Apps" />
				<Menu.Menu position="right">
					<Menu.Item>Momosh</Menu.Item>
				</Menu.Menu>
			</Menu>

			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/tasks" exact component={Tasks} />
				<Route path="/tasks/:id" component={TasksDetails} />
			</Router>
		</StyledContainer>
	)
}

export default App
