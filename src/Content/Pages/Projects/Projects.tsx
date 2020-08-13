import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import DbService from '../../../Services/Db'
import { Status } from '../../../UIElements/Status'

interface ProjectsState {
	items: JSX.Element[] | null
	isLoading: boolean
	hasFailed: boolean
}

class Projects extends React.Component<any, ProjectsState> {
	state: ProjectsState = { items: [], isLoading: true, hasFailed: false }
	componentDidMount() {
		DbService.getProjects()
			.then((data) => {
				const items = new Array<JSX.Element>()
				for (let i = 0; ; i++) {
					let project = data[i]
					if (!project) break
					items.push(
						<ProjectCard
							name={project.name}
							language={project.language}
							url={project.url}
							license={project.license}
							description={project.description}
							key={project.name}
						/>
					)
				}
				this.setState({ items, isLoading: false })
			})
			.catch((err) => {
				this.setState({
					items: [],
					isLoading: false,
					hasFailed: true,
				})
			})
	}
	render() {
		if (this.state.hasFailed) {
			return <Status>Can't connect to database</Status>
		}
		if (this.state.isLoading) {
			return <Status>Loading...</Status>
		}
		return <React.Fragment>{this.state?.items}</React.Fragment>
	}
}
export default Projects
