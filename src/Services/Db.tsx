function getProjects<T>(url: string): Promise<T> {
	return fetch(url).then((data) => {
		return data.json() as Promise<T>
	})
}

export { getProjects }
