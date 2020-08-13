import React from 'react'
export class Status extends React.Component<{ children: string }> {
	render() {
		return <h2 className="text-center">{this.props.children}</h2>
	}
}
