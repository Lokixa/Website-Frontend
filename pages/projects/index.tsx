import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { Status } from "../../components/Status";
import { Project } from "../../Services/DbModels/Project";
import DbService from "../../Services/DbServices";

interface Props {
	data: Project[];
	hasFailed: boolean;
}
interface State {
	items: JSX.Element[] | null;
}

class ProjectsIndex extends React.Component<Props, State> {
	state: State = {
		items: null,
	};
	componentDidMount() {
		if (!this.state.items) {
			const items = new Array<JSX.Element>();
			for (let i = 0; i < this.props.data.length; i++) {
				let project = this.props.data[i];
				items.push(
					<ProjectCard
						name={project.name}
						language={project.language}
						url={project.url}
						license={project.license}
						description={project.description}
						key={project.name}
					/>
				);
			}
			this.setState({ items });
		}
	}

	render() {
		if (this.props.hasFailed) {
			return <Status>Can't connect to database</Status>;
		}
		return <React.Fragment>{this.state.items}</React.Fragment>;
	}
}
export default ProjectsIndex;

export async function getStaticProps(context) {
	let data = await DbService.getProjects();
	return {
		props: {
			data,
			hasFailed: false,
		},
	};
}
