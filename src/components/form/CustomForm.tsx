import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import InputTypeFileField from './InputTypeFileField';
import InputTypeCheckboxField from './InputTypeCheckboxField';
import TextareaField from './TextareaField';
import ImageField from './ImageField';

interface IField {
	name: string;
	inputName?: string;
	type: 'input' | 'image' | 'select' | 'file' | 'checkbox' | 'textarea';
	props?: any;
}

interface IProps {
	fields: { [ key: string ]: IField };
	//данные конкретного объекта, например админа
	item?: any;
}


const CustomForm = ( { fields, item }: IProps ) => {
	return (
			<div className='column containerForm width-100'>

				{/*	firstname: {*/ }
				{/*	name: 'First Name',*/ }
				{/*	type: 'input',*/ }
				{/*	props: {*/ }
				{/*	containerClassName: 'mb-20'*/ }
				{/*}*/ }

				{ Object.keys( fields ).map( name => {
					const field = fields[ name ];

					let defaultValue = item ? item[ name ] : undefined;
					let inputName = field.inputName || name;
					let inputNames = field.inputName?.split( '.' ); //['name','en']
					if ( inputNames ) {
						inputName = inputNames[ 0 ];
						inputNames.forEach( ( n, i ) => {
							if ( i ) {
								defaultValue = defaultValue ? defaultValue[ n ] : undefined;
								inputName += `[${ n }]`;
							}
						} );
					}

					let Component: any = () => <div/>;
					//все поля забить сюда - карты и тд
					switch ( field.type ) {
						case 'input':
							Component = InputField;
							break;
						case 'textarea':
							Component = TextareaField;
							break;
						case 'file':
							Component = InputTypeFileField;
							break;
						case 'checkbox':
							Component = InputTypeCheckboxField;
							break;
						case 'select':
							Component = SelectField;
							break;
						case 'image':
							Component = ImageField;
							break;
					}

					return (
							<Component
									key={ name }
									name={ inputName || name }
									label={ field.name }
									defaultValue={ defaultValue }

									{ ...field.props }
							/>
					);
				} ) }
			</div>
	);
};

export default CustomForm;