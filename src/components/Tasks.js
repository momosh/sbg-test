import React, { useState, useEffect } from 'react'
import { Segment, Dropdown, Dimmer, Loader } from 'semantic-ui-react'

import TaskList from './TaskList'
import { useApiGet } from '../api'

const tasksURL = 'tasks'

const limitOptions = [
	{
		key: '5',
		text: '5',
		value: 5,
	},
	{
		key: '10',
		text: '10',
		value: 10,
	},
	{
		key: '25',
		text: '25',
		value: 25,
	},
]

const Tasks = props => {
	const [tasks, getTasks] = useApiGet(tasksURL)
	const [limit, setLimit] = useState()

	const limitText = limit ? `Items per Page ${limit}` : 'Items per Page'
	const handleLimitChange = (e, { value }) => setLimit(value)

	useEffect(() => {
		getTasks({
			limit,
		})
	}, [limit])

	return (
		<>
			<Dropdown
				text={limitText}
				icon="list alternate outline"
				floating
				labeled
				button
				className="icon"
				options={limitOptions}
				onChange={handleLimitChange}
				value={limit}
			/>
			<Segment>
				<Dimmer active={tasks.loading}>
					<Loader />
				</Dimmer>

				<TaskList tasks={tasks} />
			</Segment>
		</>
	)
}

export default Tasks
