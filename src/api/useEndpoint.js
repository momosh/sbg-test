import { useState, useEffect } from 'react'
import { isEmpty } from 'ramda'
import _axios from 'axios'

const CancelToken = _axios.CancelToken
const cancelSource = CancelToken.source()

const axios = _axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
})
axios.interceptors.request.use(config => {
	const { token } = config

	if (!isEmpty(token)) {
		config.headers['X-SBG-Auth-Token'] = token
	}

	return config
})

const useEndpoint = fn => {
	const [res, setRes] = useState({
		data: null,
		loading: false,
		error: false,
	})
	const [req, setReq] = useState()

	useEffect(() => {
		if (!req) return
		setRes({
			data: null,
			loading: true,
			error: false,
		})

		callApi(req)

		return () => cancelSource.cancel('HTTP call canceled.')
	}, [req])

	const callApi = async req => {
		try {
			const { data } = await axios(req)
			setRes({
				data,
				loading: false,
				error: false,
			})
		} catch (err) {
			setRes({
				data: null,
				loading: false,
				error: true,
			})
		}
	}

	return [res, (...args) => setReq(fn(...args))]
}

export default useEndpoint
