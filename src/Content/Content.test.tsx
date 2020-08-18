import React from 'react'
import { mount } from 'enzyme'
import Content from './Content'
import { MemoryRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CoolThings from './Pages/CoolThings/CoolThings'
import Projects from './Pages/Projects/Projects'
import ErrorPage from '../UIElements/ErrorPage'

configure({ adapter: new Adapter() })

describe('Render content', () => {
	it('should show the homepage', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/']}>
				<Content />
			</MemoryRouter>
		)
		expect(doc.find(Home)).toHaveLength(1)
	})
	it('should show the projects page', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/projects']}>
				<Content />
			</MemoryRouter>
		)
		expect(doc.find(Projects)).toHaveLength(1)
	})
	it('should show the cool things page', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/cool-things']}>
				<Content />
			</MemoryRouter>
		)
		expect(doc.find(CoolThings)).toHaveLength(1)
	})
	it('should redirect to home', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/invalid-path']}>
				<Content />
			</MemoryRouter>
		)
		expect(doc.find(ErrorPage)).toHaveLength(1)
	})
})
