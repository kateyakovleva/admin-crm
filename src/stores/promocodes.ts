import { apiGet, apiPost } from '../api';
import { IPromoCodeID, IPromoCodes } from '../types/promocode';


export const getListPromoCodes = async () => {
	return await apiGet<IPromoCodes>( { url: '/promocodes' } );
};

export const getPromoCodeID = async ( id?: string ) => {
	return await apiGet<IPromoCodeID>( { url: `/promocodes/${ id }` } );
};

export const savePromoCode = async ( id: string, data: any ) => {
	return await apiPost<IPromoCodeID>( {
		url: `/promocodes/${ id }`,
		postData: data
	} );
};

export const createPromoCode = async ( data: any ) => {
	return await apiPost<IPromoCodeID>( {
		url: '/promocodes',
		postData: data
	} );
};
