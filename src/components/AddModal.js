import React, { useState } from 'react'
import { Button, Modal, Icon, Input, Message } from 'semantic-ui-react'

import { useApiSave } from '../api'

const AddModal = () => {
	const [open, setOpen] = useState(false)
	const [name, setName] = useState('')
	const [task, saveTask] = useApiSave('projects')

	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)

	const handleNameChange = e => setName(e.target.value)

	const handleSave = () => {
		setName('')
		saveTask({
			name,
		})
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			trigger={
				<Button
					icon
					labelPosition="right"
					color="teal"
					onClick={handleOpen}
				>
					<Icon name="add" />
					New Project
				</Button>
			}
		>
			<Modal.Header>Create a New Project</Modal.Header>
			<Modal.Content>
				<Input
					label="Project Name"
					placeholder="Some really epic name..."
					value={name}
					onChange={handleNameChange}
				/>

				<Modal.Description style={{ marginTop: '15px' }}>
					{task.data ? (
						<Message
							success
							header="Your project creation was successful"
							content="You could probably see it on Task page"
						/>
					) : null}

					{task.error ? (
						<Message
							negative
							header="Oops, something went wrong!"
							content={task.message}
						/>
					) : null}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					positive
					icon
					labelPosition="left"
					onClick={handleSave}
					disabled={name.length == 0 && !task.loading}
					loading={task.loading}
				>
					<Icon name="save" />
					Save
				</Button>
				<Button onClick={handleClose} negative>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	)
}

export default AddModal
