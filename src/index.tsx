import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Content />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
