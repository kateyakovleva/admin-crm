import React from 'react';


interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	containerClassName?: string;
	label?: string;
}

const InputField = ( { containerClassName, label, ...props }: IProps ) => {
	return (
			//если нужно добавить свойство элементу - создаем новый пропс
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{/*пропс reqiuired из стандартной типизации для input (навести на элемент, найти пропсы и перейти) - условие если пропс true - отображаем*/ }
					{/*я забыла пропс передать в форму*/ }
					{ props.required && <span className='red-star'>*</span> }
				</div>
				<input type='text' className='input widthInputEdit mb-20' { ...props }/>
			</div>
	);
};

export default InputField;