import { apiGet } from '../api';
import { IOrderID, IOrders } from '../types/orders';

export const getListOrders = async () => {
	return await apiGet<IOrders>( { url: '/orders' } );
};

export const getOrderID = async ( id?: string | null | number ) => {
	return await apiGet<IOrderID>( { url: `/orders/${ id }` } );
};