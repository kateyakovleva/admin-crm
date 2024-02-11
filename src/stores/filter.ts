import { useSearchParams } from 'react-router-dom';

export const useFilterParams = () => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	const filterParams = useFilter();

	const changeFilter = ( field: string ) => ( e: any ) => {
		const val = e.target?.value || e.value;

		if ( field !== 'page' ) {
			searchParams.delete( 'page' );
		}

		if ( val !== '' && val !== undefined ) {
			searchParams.set( field, val );
		} else {
			searchParams.delete( field );
		}
		delay()( () => setSearchParams( searchParams ), 400 );
	};

	const clearFilter = () => {
		Object.keys( filterParams ).forEach( field => {
			searchParams.delete( field );
		} );
		setSearchParams( searchParams );
	};

	return [ filterParams, changeFilter, clearFilter ];
};

export class FilterParams {
	constructor( defaultParams?: any ) {
		if ( defaultParams ) {
			Object.keys( defaultParams ).forEach( key => {
				// @ts-ignore
				this[ key ] = defaultParams[ key ];
			} );
		}
	}

	toString() {
		return Object.values( this ).join( ',' );
	}

	toQueryParams() {
		return objectToSearchParams( this );
	}

	clear() {

	}
}

export function useFilter(): FilterParams | any {
	const [ searchParams ] = useSearchParams();
	let data: any = new FilterParams();

	searchParams.forEach( ( val, key ) => {
		data[ key ] = val;
	} );
	return data;
}

export const delay = function () {
	let timer: any;

	return function ( callback: any, ms: number ) {
		if ( timer ) clearTimeout( timer );
		timer = setTimeout( callback, ms );
	};
};

export const objectToSearchParams = ( object?: any ) => {
	if ( !object ) return '';
	let temp: any[] = [];
	Object.keys( object ).forEach( ( key ) => {
		if ( typeof object[ key ] === 'function' ) {
			return;
		}

		if ( object[ key ] instanceof Array ) {
			temp.push( arrayToSearchParams( key, object[ key ] ) );
		} else if ( typeof object[ key ] === 'object' ) {
			temp.push( objectToSearchParams( object[ key ] ) );
		} else {
			temp.push( `${ key }=${ object[ key ] }` );
		}
	} );

	return temp.join( '&' );
};

export const arrayToSearchParams = ( key: number | string, array: any[] ) => {
	let temp: any[] = [];
	array.forEach( ( value ) => {
		if ( value instanceof Array ) {
			temp.push( arrayToSearchParams( `${ key }[]`, value ) );
		} else if ( typeof value === 'object' ) {
			temp.push( objectToSearchParams( value ) );
		} else {
			temp.push( `${ key }[]=${ value }` );
		}
	} );

	return temp.join( '&' );
};
