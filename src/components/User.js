import React, { useEffect } from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

import { useApiGet } from '../api'

const User = () => {
	const [user, getUser] = useApiGet('user')

	useEffect(() => {
		getUser()
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<strong style={{ margin: 0 }}>User name:</strong>

			{user.loading ? (
				<Dimmer active inverted>
					<Loader size="small" />
				</Dimmer>
			) : null}
			{user.data ? <p>{user.data.username}</p> : null}
		</div>
	)
}

export default User
