import useEndpoint from './useEndpoint'

const createBaseURL = apiVersion => {
	const { REACT_APP_API_URL } = process.env

	return `${REACT_APP_API_URL}/${apiVersion}`
}

const getToken = () => process.env.REACT_APP_API_TOKEN

const baseURL = createBaseURL('v2')

export const useApiGet = url => {
	const token = getToken()
	return useEndpoint(params => ({
		method: 'GET',
		baseURL,
		url,
		token,
		params,
	}))
}

export const useApiSave = url => {
	const token = getToken()
	return useEndpoint(data => ({
		method: 'POST',
		baseURL,
		data,
		url,
		token,
	}))
}

export const useApiRemove = url => {
	const token = getToken()
	return useEndpoint(data => ({
		method: 'DELETE',
		baseURL,
		data,
		url,
		token,
	}))
}
