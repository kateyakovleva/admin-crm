import { apiGet, apiPost } from '../api';
import { IRole, IRoleID, IRoles } from '../types/roles';
import { createEvent, createStore } from 'effector';

export const getListRoles = async () => {
	const responce = await apiGet<IRoles>( { url: '/roles' } );
	updateRoles( responce.items );
	return responce;
};

export const getRoleID = async ( id?: string ) => {
	return await apiGet<IRoleID>( { url: `/roles/${ id }` } );
};

export const saveAdminGroup = async ( id: string, data: any ) => {
	return await apiPost<IRoleID>( {
		url: `/roles/${ id }`,
		postData: data
	} );
};

export const createAdminGroup = async ( data: any ) => {
	return await apiPost<IRoleID>( {
		url: '/roles',
		postData: data
	} );
};

export const updateRoles = createEvent<IRole[]>();

export const $roles = createStore<IRole[]>( [] )
		.on( updateRoles, ( s, p ) => p );