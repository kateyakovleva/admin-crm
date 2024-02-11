import { createEvent, createStore } from 'effector';

export const showProfileCustomer = createEvent<string | number>();
export const hideProfileCustomer = createEvent();

export const $profileCustomer = createStore<string | number | null>( null )
		.on( showProfileCustomer, ( state, newState ) => newState )
		.on( hideProfileCustomer, () => null );

export const showModalMessage = createEvent<number | string>();
export const hideModalMessage = createEvent();

export const $modalMessage = createStore<number | string | null>( null )
		.on( showModalMessage, ( state, newState ) => newState )
		.on( hideModalMessage, () => null );
