import { IPermission } from './permissions';
import { ILanguageProperty } from './language';

export interface IRoles {
	items: IRole[];
	count: number;
}

export interface IRoleID {
	id: string;
	name: ILanguageProperty[];
	description: ILanguageProperty[];
	status: number;
	permissions: IPermission[];
}

export interface IRole {
	id: number;
	name: string;
	description: string;
	status: number;
	permissions: IPermission[];
}



