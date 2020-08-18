import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

test('Navbar renders all nav items', () => {
	const doc = render(
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	)
	const navItems = ['Home', 'Projects', 'Cool Things']
	navItems.forEach(async (item) => {
		let el = await doc.queryByText(item)
		expect(el).not.toBeNull()
	})
})
