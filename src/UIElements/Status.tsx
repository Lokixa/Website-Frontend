import React from 'react'
export class Status extends React.Component<{ children: string }> {
	render() {
		return <div className="h3 py-3 text-center">{this.props.children}</div>
	}
}
