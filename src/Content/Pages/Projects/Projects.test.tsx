import React from 'react'
import Projects from './Projects'
import ProjectsIndex from './Pages/ProjectsIndex'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import { mount, configure } from 'enzyme'
import ErrorPage from '../../../UIElements/ErrorPage'

configure({ adapter: new Adapter() })

describe('Render projects', () => {
	it('should load project cards', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/']}>
				<Projects />
			</MemoryRouter>
		)
		expect(doc.find(ProjectsIndex)).toHaveLength(1)
	})
	it('should show error page', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/invalid-page']}>
				<Projects />
			</MemoryRouter>
		)

		expect(doc.find(ErrorPage)).toHaveLength(1)
	})
})
