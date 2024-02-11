import React, { useState } from 'react';
import '../../styles/checkbox.scss';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	containerClassName?: string;
	label?: string;
}

const InputTypeCheckboxField = ( { containerClassName, label, ...props }: IProps ) => {

	const [ onPosition, setOnPosition ] = useState( true );

	const handleChange = () => {
		setOnPosition( !onPosition );
	};

	return (
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{ props.required && <span className='red-star'>*</span> }
				</div>
				<label className='checkbox-green'>
					<input type='checkbox' className='input' { ...props } checked={ onPosition } onChange={ handleChange }/>
					<span className='checkbox-green-switch' data-label-on='On' data-label-off='Off'></span>
				</label>
			</div>
	);
};

export default InputTypeCheckboxField;