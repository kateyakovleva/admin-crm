import React from 'react';

import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';

const LanguageLabel = () => {

	const items = [
		{
			sms: 'LBL_UFX_PROVIDER_LOC_NOTE',
			code: 'Allow service at your location": Set this option if you want the user\'s to come at your location for the services.',
			edit: 'edit'
		},
		{
			sms: 'LBL_UFX_PROVIDER_LOC_NOTE',
			code: 'Edit / Delete Record Feature" has been disabled on the Demo Admin Panel. This feature will be enabled on the main script we will provide you',
			edit: 'edit'
		},
		{
			sms: 'LBL_UFX_PROVIDER_LOC_NOTE',
			code: 'No masseurs available at your selected location',
			edit: 'edit'
		},
		{
			sms: 'LBL_UFX_PROVIDER_LOC_NOTE',
			code: 'No masseurs available at your selected location',
			edit: 'edit'
		},
	];


	return (
			<div className='languageLabel'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Language Label</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								sms: 'Code',
								code: 'Value In English Language',
								edit: 'Edit'
							} }
							headFieldsClassName={ {
								edit: 'thText-center'
							} }
							bodyFieldsClassName={ {
								edit: 'thText-center'
							} }
							columnBody={ {
								edit: ( item ) =>
										<div className='padding5'>
											<Link to={ '/edit_language_label' }>
												<BsPencilSquare className='thIcon'/>
											</Link>
										</div>
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default LanguageLabel;