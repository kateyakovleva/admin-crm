import { IRoleID } from './roles';

export interface IAdmins {
	items: IAdminID[];
	count: number;
}

export interface IAdminID {
	id: string;
	username: string;
	firstname: string;
	email: string;
	roles: IRoleID[];
	status: number;
}


