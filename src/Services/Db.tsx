import { Project } from '../Content/Pages/Projects/Project'

class DbServices {
	static getProjects(url: string): Promise<Project[]> {
		return fetch(url).then((data) => {
			return data.json() as Promise<Project[]>
		})
	}
}

export default DbServices
