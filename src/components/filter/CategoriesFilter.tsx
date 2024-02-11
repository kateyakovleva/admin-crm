import React, { useState } from 'react';
import '../../styles/search.scss';
import { useFilterParams } from '../../stores/filter';
import SelectorStatus from '../selectors/SelectorStatus';
import { Link } from 'react-router-dom';


const CategoriesFilter = () => {
	const [ filter, changeFilter, clearFilter ] = useFilterParams();

	const [ updateFilter, setUpdateFilter ] = useState( Date.now() );


	const clear = () => {
		clearFilter();
		setUpdateFilter( Date.now() );
	};

	return (
			<div className='search column justify-center'>
				<div className='row justify-between align-center width-100'>
					<div className='row width-50 align-center justify-between'>
						<div className='searchTitle'>Search</div>

						<input
								//когда изменяется значение key, инпут перезагружается и оказывается пустой
								key={ updateFilter }
								type='text'
								className='input width-20'
								//инпут сохранит последнее введенное пользователем значение, а по умолчанию оно пустое
								defaultValue={ filter.name }
								//это функция записывает новое значение, введенное пользователем, в адресную строку, чтобы проверить на соответствие с фильтром
								onChange={ changeFilter( 'name' ) }
						/>
						<SelectorStatus width={ '30%' }/>

						<button type='button' className='btn width-15' onClick={ clear }>RESET</button>
					</div>
					<Link to='/manage_services/categories/create_categories' className='colorW width-10'>
						<button type='button' className='btnAdd width-100'>
							ADD
						</button>
					</Link>
				</div>
			</div>
	);
};

export default CategoriesFilter;