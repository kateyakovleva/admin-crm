import { IRole } from './roles';
import { IPermission } from './permissions';

export interface ILoginResponse {
	token: string;
}

export interface ILoginRequest {
	email: string;
	password: string;
}

export interface IAccountResponse {
	id: string;
	username: string;
	firstname: string;
	email: string;
	roles: IRole[];
	permissions: IPermission[];
}

