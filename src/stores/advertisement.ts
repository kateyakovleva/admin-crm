import { apiGet, apiPost } from '../api';
import { IAdvertisementID, IAdvertisements } from '../types/advertisement';


export const getListAdvertisements = async () => {
	return await apiGet<IAdvertisements>( { url: '/promo_modules' } );
};

export const getAdvertisementID = async ( id?: string ) => {
	return await apiGet<IAdvertisementID>( { url: `/promo_modules/${ id }` } );
};

export const saveAdvertisement = async ( id: string, data: any ) => {
	return await apiPost<IAdvertisementID>( {
		url: `/promo_modules/${ id }`,
		postData: data
	} );
};

export const createAdvertisement = async ( data: any ) => {
	return await apiPost<IAdvertisementID>( {
		url: '/promo_modules',
		postData: data
	} );
};
