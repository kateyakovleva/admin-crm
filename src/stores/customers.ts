import { apiGet, apiPost } from '../api';
import { ICustomerID, ICustomers } from '../types/customers';

export const getListCustomers = async () => {
	return await apiGet<ICustomers>( { url: '/customers' } );
};

export const getCustomerID = async ( id?: string | null | number ) => {
	return await apiGet<ICustomerID>( { url: `/customers/${ id }`, } );
};

export const saveCustomer = async ( id: string, data: any ) => {
	return await apiPost<ICustomerID>( {
		url: `/customers/${ id }`,
		postData: data
	} );
};

export const createCustomer = async ( data: any ) => {
	return await apiPost<ICustomerID>( {
		url: '/customers',
		postData: data
	} );
};
