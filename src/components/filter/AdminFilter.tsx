import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../styles/search.scss';
import { useFilterParams } from '../../stores/filter';
import { useStore } from 'effector-react';
import { $roles } from '../../stores/roles';
import SelectorStatus from '../selectors/SelectorStatus';
import { Link } from 'react-router-dom';


const options = [
	{ value: 'all', label: 'All' },
	{ value: 'name', label: 'Name' },
	{ value: 'email', label: 'E-mail' },
	{ value: 'roles', label: 'Role' },
];

const AdminFilter = () => {
	const [ filter, changeFilter, clearFilter ] = useFilterParams();
	const roles = useStore( $roles );
	const _roles: any = roles.map( role => ( { label: role.name, value: role.id } ) );

// в перемененую defaultSelect мы записываем значение первого объекта из массива options. потом мы options мапим с условием соответствия: если в адресной строке записано отфильтрованное значение, то мы его записываем в переменную defaultOptions, чтобы при обновлении данные отобразились в фильтре, который пользователь выбрал
	const [ selected, setSelect ] = useState( options[ 0 ] );

	useEffect( () => {
		let sel = options[ 0 ];
		options.map( o => {
			if ( filter[ o.value ] ) {
				sel = o;
			}
		} );
		setSelect( sel );
	}, [ filter.name, filter.email, filter.roleId ] );

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
								className='selector-small'
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

						<Select
								placeholder='Select Role'
								className='selector-large'
								defaultValue={ _roles.find( ( role: any ) => role.value = filter.roleId ) }
								onChange={ ( val ) => changeFilter( 'roleId' )( val.value ) }
								options={ _roles }
						/>
						<button type='button' className='btn' onClick={ clearFilter }>RESET</button>
					</div>
					<Link to='/admin/list/create_admin' className='colorW width-10'>
						<button type='button' className='btnAdd width-100'>
							ADD
						</button>
					</Link>
				</div>
			</div>
	);
};

export default AdminFilter;