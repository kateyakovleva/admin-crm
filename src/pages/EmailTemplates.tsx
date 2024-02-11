import React from 'react';

import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';

const EmailTemplates = () => {

	const items = [
		{
			email: 'Cancel subscription',
			purpose: 'subscription cancel',
			edit: 'edit'
		},
		{
			email: 'Company registration on PlusXMassage',
			purpose: 'subscription cancel',
			edit: 'edit'
		},
		{
			email: 'Congratulations ! You have earn referral benefit on PlusXMassage',
			purpose: 'subscription cancel',
			edit: 'edit'
		}, {
			email: 'Contact Us Form Details',
			purpose: 'subscription cancel',
			edit: 'edit'
		},
	];

	return (
			<div className='emailTemplates'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Email Templates</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								email: 'E-mail Subject',
								purpose: 'Purpose',
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
											<Link to={ '/edit_email_template' }>
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

export default EmailTemplates;