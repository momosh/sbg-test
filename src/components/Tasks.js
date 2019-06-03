import React, { useState, useEffect } from 'react'
import { Segment, Dropdown } from 'semantic-ui-react'

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

const statusOptions = [
	{
		key: 'NOFILTER',
		text: 'No filter',
		value: null,
	},
	{
		key: 'QUEUED',
		text: 'Queued',
		value: 'QUEUED',
	},
	{
		key: 'DRAFT',
		text: 'Draft',
		value: 'DRAFT',
	},
	{
		key: 'RUNNING',
		text: 'Running',
		value: 'RUNNING',
	},
	{
		key: 'COMPLETED',
		text: 'Completed',
		value: 'COMPLETED',
	},
	{
		key: 'ABORTED',
		text: 'Aborted',
		value: 'ABORTED',
	},
	{
		key: 'FAILED',
		text: 'Failed',
		value: 'FAILED',
	},
]

const Tasks = ({ history }) => {
	const [tasks, getTasks] = useApiGet(tasksURL)
	const [limit, setLimit] = useState()
	const [status, setStatus] = useState()

	const limitText = limit
		? `Showing ${limit} Items`
		: 'Limit Number of Results'
	const statusText = status ? status : 'Filter by Status'

	const handleLimitChange = (e, { value }) => setLimit(value)
	const handleStatusChange = (e, { value }) => setStatus(value)

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
			<Dropdown
				text={statusText}
				icon="filter"
				floating
				labeled
				button
				className="icon"
				options={statusOptions}
				onChange={handleStatusChange}
				value={status}
			/>

			<Segment style={{ marginBottom: '25px' }}>
				<TaskList tasks={tasks} history={history} filter={status} />
			</Segment>
		</>
	)
}

export default Tasks
