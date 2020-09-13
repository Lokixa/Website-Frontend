import { Project } from "./DbModels/Project";

class DbServices {
	private static url: string = process.env.BACKEND_URL || "";

	static requestOptions: RequestInit = {
		method: "GET",
		headers: {
			Authorization: process.env.BACKEND_KEY || "",
		},
		redirect: "follow",
	};
	static getProjects(): Promise<Project[]> {
		return fetch(this.url + "projects", this.requestOptions).then(
			(data) => data.json() as Promise<Project[]>
		);
	}
	static getProject(name: string): Promise<Project> {
		return fetch(this.url + "projects/" + name, this.requestOptions).then(
			(data) => data.json() as Promise<Project>
		);
	}
}

export default DbServices;
