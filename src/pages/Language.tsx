import React from 'react';
import Table from '../components/Table';
import '../styles/checkbox.scss';
import Notes from '../components/Notes';

const Language = () => {

	const items = [
		{
			id: 'English',
			code: 'EN',
			default: 'true',
			action: 'action'

		},
		{
			id: 'Español',
			code: 'EN',
			default: 'true',
			action: 'action'

		},
		{
			id: 'Deutsche',
			code: 'EN',
			default: 'true',
			action: 'action'

		},
	];

	return (
			<div className='language'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Language</div>
					<Table
							items={ items }
							fields={ {
								id: 'Language',
								code: 'LangCode',
								default: 'Default',
								action: 'action'
							} }
							headFieldsClassName={ {
								action: 'width-15'
							} }
							columnBody={ {
								action: ( item ) =>
										<label className='checkbox-green'>
											<input type='checkbox' className='input'/>
											<span className='checkbox-green-switch' data-label-on='On' data-label-off='Off'></span>
										</label>
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default Language;