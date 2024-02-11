import { apiGet } from '../api';
import { ILanguage, ILanguages } from '../types/language';
import { createEvent, createStore } from 'effector';


export const getListLanguages = async () => {
	const responce = await apiGet<ILanguages>( { url: '/languages' } );
	updateLanguages( responce.items );
	return responce;
};

export const getLanguage = async ( id?: string ) => {
	return await apiGet<ILanguage>( { url: `/languages/${ id }` } );
};

export const updateLanguages = createEvent<ILanguage[]>();

export const $languages = createStore<ILanguage[]>( [] )
		.on( updateLanguages, ( s, p ) => p );
