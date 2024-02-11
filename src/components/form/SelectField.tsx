import React from 'react';
import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';


interface IProps extends StateManagerProps {
	containerClassName?: string;
	label?: string;
}

const options = [
	{ value: 'Super Administrator', label: 'Super Administrator' },
	{ value: 'Dispatcher Administrator', label: 'Dispatcher Administrator' },
	{ value: 'Billing Administrator', label: 'Billing Administrator' },
	{ value: 'Server Administrator', label: 'Server Administrator' },
];

const SelectField = ( { containerClassName, label, ...props }: IProps ) => {
	return (
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{ props.required && <span className='red-star'>*</span> }
				</div>
				<div>
					<Select className='selector-large width-100 mb-20' { ...props } options={ options }/>
				</div>
			</div>
	);
};

export default SelectField;