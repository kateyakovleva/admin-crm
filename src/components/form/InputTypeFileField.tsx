import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	containerClassName?: string;
	label?: string;
}

const InputTypeFileField = ( { containerClassName, label, ...props }: IProps ) => {
	return (
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{ props.required && <span className='red-star'>*</span> }
				</div>
				<div>
					<input type='file' className='input widthInputEdit' { ...props }/>
				</div>
			</div>
	);
};

export default InputTypeFileField;