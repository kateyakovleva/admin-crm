import axios, { AxiosError, AxiosResponse } from 'axios';
import { API } from './global';
import { IApiRequestGet, IApiRequestPost } from './api';
//import { updateAlert } from '../adminComponents/Alert/Alert';
import { getAuthToken, logout } from '../stores/auth';
import { showAlert } from '../stores/warnings';

export const Api = axios.create( {
	baseURL: API.url,
	timeout: API.timeout,
} );

export const getHeaders = ( token: string, data: any ) => {
	const headers: any = {};

	if ( !( data instanceof FormData ) ) {
		// @ts-ignore
		headers[ 'Content-Type' ] = 'application/json';
	}

	if ( token ) {
		// @ts-ignore
		headers.Authorization = `Bearer ${ token }`;
	}

	return headers;
};

// @ts-ignore
// eslint-disable-next-line no-undef
Api.interceptors.request.use( ( config: AxiosRequestConfig ) => {
	const token = getAuthToken();

	config.headers = { ...config.headers, ...getHeaders( token, config.data ) };

	return config;
} );

const successHandler = ( response: AxiosResponse ) => {
	if ( response.status === 401 ) {
		// logoutInstance();
	}

	if ( response.status === 400 ) {
		showAlert( {
			type: 'danger',
			message: response.data.message,
		} );
	}

	return response.data;
};

const errorHandler = ( error: AxiosError ) => {
	//@ts-ignore
	if ( error.response.status === 401 ) {
		// @ts-ignore
		logout();
	}

	if ( error.response?.status === 400 ) {
		showAlert( {
			type: 'danger',
			// @ts-ignore
			message: error.response?.data?.message,
		} );
	}

	if ( error.response?.status === 500 ) {
		showAlert( {
			type: 'danger',
			message: 'Что то пошло не так...',
		} );
	}

	if ( error.response?.status === 403 ) {
		showAlert( {
			type: 'danger',
			// @ts-ignore
			message: 'Доступ к ресурсу запрещен!',
		} );
	}

	throw error;
};

export async function apiPost<T>( { url, postData }: IApiRequestPost ): Promise<T> {
	return await Api.post( url, postData )
			.then( successHandler )
			.catch( errorHandler );
}

export async function apiGet<T>( { url }: IApiRequestGet ): Promise<T> {
	return Api.get( url )
			.then( successHandler )
			.catch( errorHandler );
}

export async function apiPatch<T>(
		{
			url,
			postData,
		}: IApiRequestPost ): Promise<T> {

	return await Api.patch( url, postData )
			.then( successHandler )
			.catch( errorHandler );
}

export async function apiDelete<T>(
		{
			url,
			postData,
			headerList = {},
		}: IApiRequestPost ): Promise<T> {

	return await Api.delete( url, {
		data: postData,
		headers: headerList,
	} )
			.then( successHandler )
			.catch( errorHandler );
}
