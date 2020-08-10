import { Schema } from 'mongoose'

export const ProjectsSchema = new Schema({
	name: {
		type: String,
		required: 'Project needs name',
	},
	url: {
		type: String,
		required: 'Project needs url',
	},
	language: {
		type: String,
		required: 'Needs a main language',
	},
	description: {
		type: String,
	},
	license: {
		type: {
			name: String,
			url: String,
		},
	},
})
