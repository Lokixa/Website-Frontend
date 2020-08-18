import React from 'react'
import ProjectsIndex from './ProjectsIndex'
import DbServices from '../../../../Services/DbServices'
import { render } from '@testing-library/react'

test('Check projects from page with database', async () => {
	const doc = render(<ProjectsIndex />)
	let projects = await DbServices.getProjects()
	projects.forEach((project) => {
		let name = doc.queryByText(project.name)
		let language = doc.queryByText(project.language)
		if (project.description) {
			let description = doc.queryByText(project.description)
			expect(description).toBeTruthy()
		}
		if (project.license) {
			let license = doc.queryByText(project.license)
			expect(license).toBeTruthy()
		}
		expect(name).toBeTruthy()
		expect(language).toBeTruthy()
	})
})
