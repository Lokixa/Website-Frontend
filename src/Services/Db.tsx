import { Project } from '../Content/Pages/Projects/Project'
import Config from '../Services/config.json'

class DbServices {
	private static url: string = Config.BackendURL
	static getProjects(): Promise<Project[]> {
		return fetch(this.url + 'projects').then(
			(data) => data.json() as Promise<Project[]>
		)
	}
	static getProject(name: string): Promise<Project> {
		return fetch(this.url + 'projects/' + name).then(
			(data) => data.json() as Promise<Project>
		)
	}
}

export default DbServices
