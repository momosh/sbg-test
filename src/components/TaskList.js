import React from 'react'
import styled from 'styled-components'
import { List, Button } from 'semantic-ui-react'

const StyledButton = styled(Button)`
	float: right;
`

const TaskList = props => {
	console.log('TASKS: ', props.tasks)

	return (
		<List divided relaxed>
			<List.Item>
				<StyledButton color="red" icon="remove" basic size="small" />
				<List.Content>
					<List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
					<List.Description as="a">
						Updated 10 mins ago
					</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon name="github" size="large" verticalAlign="middle" />
				<List.Content>
					<List.Header as="a">
						Semantic-Org/Semantic-UI-Docs
					</List.Header>
					<List.Description as="a">
						Updated 22 mins ago
					</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon name="github" size="large" verticalAlign="middle" />
				<List.Content>
					<List.Header as="a">
						Semantic-Org/Semantic-UI-Meteor
					</List.Header>
					<List.Description as="a">
						Updated 34 mins ago
					</List.Description>
				</List.Content>
			</List.Item>
		</List>
	)
}

export default TaskList
