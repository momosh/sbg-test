import React, { useEffect } from 'react'
import {
	Header,
	Segment,
	List,
	Label,
	Button,
	Icon,
	Message,
} from 'semantic-ui-react'

import Placeholder from './Placeholder'
import { useApiGet, useApiRemove } from '../api'

const TaskDetails = props => {
	const {
		match: {
			params: { id },
		},
	} = props
	const taskURL = `tasks/${id}`
	const [task, getTask] = useApiGet(taskURL)
	const [deleteStatus, deleteTask] = useApiRemove(taskURL)

	useEffect(() => {
		getTask()
	}, [])

	const handleRemoveTask = () => deleteTask()

	return (
		<>
			<Segment>
				<Header as="h1">Task Details</Header>

				{task.loading ? <Placeholder /> : null}

				{task.data ? (
					<List divided selection>
						<List.Item>
							<Label color="red" horizontal>
								App
							</Label>
							{task.data.app}
						</List.Item>
						<List.Item>
							<Label color="red" horizontal>
								Name
							</Label>
							{task.data.name}
						</List.Item>
						<List.Item>
							<Label color="blue" horizontal>
								Created By
							</Label>
							{task.data.created_by}
						</List.Item>
						<List.Item>
							<Label color="blue" horizontal>
								Project
							</Label>
							{task.data.project}
						</List.Item>
						<List.Item>
							<Label color="purple" horizontal>
								Status
							</Label>
							{task.data.status}
						</List.Item>
						<List.Item>
							<Label color="orange" horizontal>
								Link
							</Label>
							{task.data.href}
						</List.Item>
					</List>
				) : null}
			</Segment>

			<Button
				icon
				labelPosition="left"
				negative
				loading={deleteStatus.loading}
				onClick={handleRemoveTask}
			>
				<Icon name="delete" />
				Delete task
			</Button>

			{deleteStatus.error ? (
				<Message negative>
					<Message.Header>Oops, something went wrong!</Message.Header>
					<p>{deleteStatus.message}</p>
				</Message>
			) : null}
		</>
	)
}

export default TaskDetails
