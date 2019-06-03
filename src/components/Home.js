import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Home = props => (
	<Header as="h1" icon textAlign="center" color="purple">
		<Icon name="settings" />
		Welcome to SBG
		<Header.Subheader>
			Manage your tasks and not more, for now.
		</Header.Subheader>
	</Header>
)

export default Home
