import { createEvent, createStore } from 'effector';
import { IWarning } from '../types/warnings';


export const showAlert = createEvent<IWarning>();
export const hideAlert = createEvent();

export const $alert = createStore<IWarning | null>( null )
		.on( showAlert, ( state, newState ) => newState )
		.reset( hideAlert );