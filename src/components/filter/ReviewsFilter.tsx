import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../styles/search.scss';
import { useFilterParams } from '../../stores/filter';
import SelectorStatus from '../selectors/SelectorStatus';


const options = [
	{ value: 'all', label: 'All' },
	{ value: 'username', label: 'Customer Name' },
	{ value: 'id', label: 'Order Number' },
	{ value: 'rating', label: 'Rating' }
];

const ReviewsFilter = () => {
	const [ filter, changeFilter, clearFilter ] = useFilterParams();

	const [ selected, setSelect ] = useState( options[ 0 ] );

	useEffect( () => {
		let sel = options[ 0 ];
		options.map( o => {
			if ( filter[ o.value ] ) {
				sel = o;
			}
		} );
		setSelect( sel );
	}, [ filter.username, filter.name, filter.id, filter.rating ] );

	const changeSelect = ( value: any ) => {
		changeFilter( selected.value, value )( '' );
		setSelect( value );
	};


	return (
			<div className='search column justify-center'>
				<div className='row justify-between align-center width-100'>
					<div className='row width-70 align-center justify-between'>
						<div className='searchTitle'>Search</div>

						<Select
								key={ `select_${ selected.value }` }
								className='selector-small width-20'
								defaultValue={ selected }
								onChange={ changeSelect }
								options={ options }
						/>
						<input
								//когда изменяется значение key, инпут перезагружается и оказывается пустой
								key={ selected.value }
								type='text'
								className='input width-30'
								//инпут сохранит последнее введенное пользователем значение, а по умолчанию оно пустое
								defaultValue={ filter[ selected.value ] }
								//это функция записывает новое значение, введенное пользователем, в адресную строку, чтобы проверить на соответствие с фильтром
								onChange={ changeFilter( selected.value ) }
						/>
						<SelectorStatus/>
						<button type='button' className='btn' onClick={ clearFilter }>RESET</button>
					</div>
				</div>
			</div>
	);
};

export default ReviewsFilter;