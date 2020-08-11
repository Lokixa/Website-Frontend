import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import { getProjects } from '../../../Services/Db'
import { Project } from './Project'
import config from '../../../Services/config.json'

class Projects extends React.Component<any, Project[]> {
	projectCards() {
		if (this.state) {
			let project = this.state[0]
			const items = new Array<JSX.Element>()
			for (let i = 0; project; i++) {
				project = this.state[i]
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
			return items
		}
	}
	componentDidMount() {
		getProjects<Project[]>(config.connectionString).then((data) => {
			this.setState(data)
		})
	}
	render() {
		return <React.Fragment>{this.projectCards()}</React.Fragment>
	}
}
export default Projects
