import React from 'react'
import styled from 'styled-components'
import { List, Button, Dimmer, Loader } from 'semantic-ui-react'

const StyledButton = styled(Button)`
	float: right;
`

const StyledList = styled(List)`
	margin-top: 0 !important;
`

const TaskList = ({ tasks, history }) => {
	const handleClick = e => {
		const { id } = e.currentTarget.dataset
		history.push(`/tasks/${id}`)
	}

	const mapTasks = tasks => {
		if (tasks.data) {
			return tasks.data.items.map(item => (
				<List.Item
					key={item.id}
					style={{ cursor: 'pointer' }}
					data-id={item.id}
					onClick={handleClick}
				>
					<StyledButton color="red" icon="remove" basic />
					<List.Content>
						<List.Header as="a">{item.name}</List.Header>
						<List.Description>{item.project}</List.Description>
					</List.Content>
				</List.Item>
			))
		}
	}

	return (
		<>
			<Dimmer active={tasks.loading}>
				<Loader />
			</Dimmer>
			<StyledList divided relaxed>
				{mapTasks(tasks)}
			</StyledList>
		</>
	)
}

export default TaskList
