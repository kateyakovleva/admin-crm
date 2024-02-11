import React, { useState } from 'react';
import Select from 'react-select';
import '../../styles/search.scss';

const options = [
	{ value: 'select actions', label: 'Select Action' },
	{ value: 'activate', label: 'Activate' },
	{ value: 'deactivate', label: 'Deactivate' },
	{ value: 'delete', label: 'Delete' },
];

const SelectorActions = () => {

	const [ selectedOption, setSelectedOption ] = useState( options[ 0 ] );
	const change = ( value: any ) => {
		setSelectedOption( value );
	};

	return (
			<div className='width-15 mb-20'>
				<Select
						className='selector-large width-100'
						defaultValue={ selectedOption }
						onChange={ change }
						options={ options }
				/>
			</div>
	);
};

export default SelectorActions;