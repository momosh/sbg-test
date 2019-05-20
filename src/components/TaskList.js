import React from 'react'
import styled from 'styled-components'
import { List, Button } from 'semantic-ui-react'

const StyledButton = styled(Button)`
	float: right;
`

const StyledList = styled(List)`
	margin-top: 0 !important;
`

const TaskList = props => {
	console.log('TASKS: ', props.tasks)

	return (
		<StyledList divided relaxed>
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
		</StyledList>
	)
}

export default TaskList
