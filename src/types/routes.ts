export interface IRoute {
	name?: string,
	icon?: any,
	path: string,
	permissions?: {
		group: string | string[],
		action: string
	},
	content?: any,
	children?: IRoute[]
}