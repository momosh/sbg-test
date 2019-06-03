import React from 'react'
import styled from 'styled-components'
import { List, Dimmer, Loader, Message } from 'semantic-ui-react'

const StyledList = styled(List)`
	margin-top: 0 !important;
`

const TaskList = ({ tasks, history, filter }) => {
	const handleClick = e => {
		const { id } = e.currentTarget.dataset
		history.push(`/tasks/${id}`)
	}

	const mapTasks = tasks => {
		var items = tasks.data ? tasks.data.items : []

		if (filter) items = items.filter(item => item.status === filter)

		if (items.length == 0) {
			return (
				<Message
					color="purple"
					header="Hmm, seems we got nothing now"
					content="Maybe try and change those filters"
				/>
			)
		}

		return items.map(item => (
			<List.Item key={item.id}>
				<List.Content
					data-id={item.id}
					onClick={handleClick}
					style={{ cursor: 'pointer' }}
				>
					<List.Header as="a">{item.name}</List.Header>
					<List.Description>{item.project}</List.Description>
				</List.Content>
			</List.Item>
		))
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
