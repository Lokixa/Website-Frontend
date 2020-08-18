import React from 'react'
import CoolThings from './CoolThings'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import { mount, configure } from 'enzyme'
import ErrorPage from '../../../UIElements/ErrorPage'
import CoolThingsIndex from './Pages/CoolThingsIndex'

configure({ adapter: new Adapter() })

describe('Render cool things page', () => {
	it('should load the cool things index', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/']}>
				<CoolThings />
			</MemoryRouter>
		)
		expect(doc.find(CoolThingsIndex)).toHaveLength(1)
	})
	it('should show error page', () => {
		const doc = mount(
			<MemoryRouter initialEntries={['/invalid-page']}>
				<CoolThings />
			</MemoryRouter>
		)

		expect(doc.find(ErrorPage)).toHaveLength(1)
	})
})
