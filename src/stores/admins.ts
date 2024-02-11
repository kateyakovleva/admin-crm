import { apiGet, apiPost } from '../api';
import { IAdminID, IAdmins } from '../types/admins';

export const getListAdmins = async () => {
	return await apiGet<IAdmins>( { url: '/users' } );
};

export const getAdminID = async ( id?: string ) => {
	return await apiGet<IAdminID>( { url: `/users/${ id }`, } );
};

export const saveAdmin = async ( id: string, data: any ) => {
	return await apiPost<IAdminID>( {
		url: `/users/${ id }`,
		postData: data
	} );
};

export const createAdmin = async ( data: any ) => {
	return await apiPost<IAdminID>( {
		url: '/users',
		postData: data
	} );
};