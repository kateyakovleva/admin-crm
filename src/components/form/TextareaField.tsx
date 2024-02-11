import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	containerClassName?: string;
	label?: string;
}

const TextareaField = ( { containerClassName, label, ...props }: IProps ) => {
	return (
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{ props.required && <span className='red-star'>*</span> }
				</div>
				<div className='row justify-between'>
					<textarea className='width-100  textarea' { ...props }/>
				</div>
			</div>
	);
};

export default TextareaField;