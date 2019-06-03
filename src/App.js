import React from 'react'
import styled from 'styled-components'
import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Home, Tasks, TasksDetails, User } from './components'

const StyledContainer = styled(Container)`
	margin-top: 25px;
`

function App() {
	return (
		<Router>
			<StyledContainer>
				<Menu pointing style={{ minHeight: '65px' }}>
					<Menu.Item>
						<Link to="/">SBG</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/tasks">Tasks</Link>
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item>
							<User />
						</Menu.Item>
					</Menu.Menu>
				</Menu>

				<Route path="/" exact component={Home} />
				<Route path="/tasks" exact component={Tasks} />
				<Route path="/tasks/:id" component={TasksDetails} />
			</StyledContainer>
		</Router>
	)
}

export default App
