import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

interface ProjectCardProps {
	name: string
	language: string
	url: string
	description?: string
	license?: License
}
interface License {
	name: string
	url: string
}

class ProjectCard extends React.Component<ProjectCardProps> {
	render() {
		return (
			<Card
				className="mx-auto"
				style={{
					minWidth: 275,
					maxWidth: 800,
					marginBottom: 30,
					boxShadow: 'unset',
					borderBottom: 'thick double #000000',
				}}
			>
				<CardContent className="text-center">
					<Typography
						style={{ cursor: 'pointer' }}
						variant="h4"
						component="a"
						href={this.props.url}
						className="btn"
					>
						{this.props.name}
					</Typography>
					<Typography
						variant="h5"
						style={{ marginBottom: 12 }}
						color="textSecondary"
					>
						{this.props.language}
					</Typography>
					{this.props.description && (
						<Typography variant="h6" component="h2">
							{this.props.description}
						</Typography>
					)}
					<br />
				</CardContent>
				<CardActions style={{ justifyContent: 'center' }}>
					{this.props.license && (
						<Button href={this.props.license.url} size="medium">
							{this.props.license.name}
						</Button>
					)}
				</CardActions>
			</Card>
		)
	}
}
export default ProjectCard
