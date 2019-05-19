import React from 'react'
import styled from 'styled-components'
import { Container, Menu, Segment } from 'semantic-ui-react'

import { Tasks } from './components'

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

			<Segment>
				<Tasks />
			</Segment>
		</StyledContainer>
	)
}

export default App
