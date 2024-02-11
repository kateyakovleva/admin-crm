import { createEvent, createStore } from 'effector';
import { apiGet, apiPost } from '../api';
import { IAccountResponse, ILoginResponse } from '../types/auth';
import { permissions } from './permissions';


const credentials = { // в переменную положили токен(переменная), который прочитали из локального хранилища браузера
	token: localStorage.getItem( 'token' ) || '', // если в хранилище нет инфы - записываем пустую строку
};

export const getAuthToken = () => { // эта f нужна для прочтения токена из вне, потому что мы ее не экспортируем, чтобы ее нельзя было ее изменить (инкапсуллирование)
	return credentials.token;
};

export const updateCredentials = ( state: ILoginResponse ) => { // это f добавления токена в память браузера
	localStorage.setItem( 'token', state.token );
	credentials.token = state.token;
	login( true );
};

const clearCredentials = () => { // это f удаления токена из памяти браузера
	localStorage.removeItem( 'token' );
	credentials.token = '';
};

// Login / Logout
export const login = createEvent<boolean>();
export const logout = createEvent();

export const $auth = createStore<boolean>( !!credentials.token ) // !! возвращают любое значение переменной, преобразовав его в булевое. аналог записи - Boolean(credentials.token)
		.on( login, ( state, newState ) => {
			if ( !state ) fetchAccountInfo().then();
			return true;
		} )
		.on( logout, () => { // выход из своей учетной записи админом
			clearCredentials();
			clearAccountInfo();
			return false;
		} );

export const loginRequest = async ( postData: any ) => { // запрос для авторизации. в f мы передали postData(email/pass)
	const response = await apiPost<ILoginResponse>( {
		url: '/login',
		postData, // в ответе с сервера мы получили какие-то данные <any>
	} );
	if ( response.token ) updateCredentials( response ); // если в ответе есть переменная token, то мы обновляем стор

	return response;
};

export const logoutRequest = async () => { // f говорит серверу, что токен уже не актуален, надо его забыть
	const response = await apiGet( {
		url: '/logout',
	} );
	logout();

	return response;
};

// Account
const updateAccountInfo = createEvent<IAccountResponse>();
const clearAccountInfo = createEvent();

export const $accountInfo = createStore<IAccountResponse | null>( null )
		.on( updateAccountInfo, ( _, data ) => {
			permissions.updatePermissions( data.permissions );
			return data;
		} )
		.reset( clearAccountInfo );

export const fetchAccountInfo = async () => { // запрос на сервер инфы об админе, который щас авторизован
	const response = await apiGet<IAccountResponse>( {
		url: '/account',
	} );

	updateAccountInfo( response );

	return response;
};
