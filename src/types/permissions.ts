export interface IPermissions {
	items: IPermission[];
	count: number;
}

export interface IPermission {
	id: number;
	group: string;
	action: string;
	status: string;
}

export interface IPermissionGroup {
	group: string;
	actions: string[];
}
