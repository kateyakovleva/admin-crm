import React from 'react';
import Select from 'react-select';
import '../../styles/search.scss';
import { useFilterParams } from '../../stores/filter';

const options = [
	{ value: '', label: 'Select Status' },
	{ value: 'active', label: 'Active' },
	{ value: 'inactive', label: 'Inactive' },
	{ value: 'deleted', label: 'Deleted' },
];

interface IProps {
	width?: string;
}

const SelectorStatus = ( { width: string }: IProps ) => {
	const [ filter, changeFilter ] = useFilterParams();

	return (
			<div style={ { width: string } }>
				<Select
						key={ filter.status }
						className='selector-large width-100'
						defaultValue={ options.find( o => o.value === filter.status ) || options[ 0 ] }
						onChange={ changeFilter( 'status' ) }
						options={ options }
				/>
			</div>
	);
};

export default SelectorStatus;