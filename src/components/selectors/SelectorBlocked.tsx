import React, { useState } from 'react';
import Select from 'react-select';
import '../../styles/search.scss';

const options = [
	{ value: 'select status', label: 'Select Status' },
	{ value: 'blocked', label: 'Blocked' },
	{ value: 'unblocked', label: 'Unblocked' },
];

const SelectorBlocked = () => {

	const [ selectedOption, setSelectedOption ] = useState( options[ 0 ] );
	const change = ( value: any ) => {
		setSelectedOption( value );
	};

	return (
			<div className='width-20'>
				<Select
						className='selector-large width-100'
						defaultValue={ selectedOption }
						onChange={ change }
						options={ options }
				/>
			</div>
	);
};

export default SelectorBlocked;