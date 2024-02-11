import React from 'react';

import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';

const SmsTemplates = () => {

	const items = [
		{
			sms: 'Job request accept by masseur on PlusXMassage',
			code: 'BOOKING_ACCEPT_BYDRIVER_MESSAGE_SP',
			edit: 'edit'
		},
		{
			sms: 'Job request accept by masseur on PlusXMassage',
			code: 'CUSTOMER_RESET_PASSWORD',
			edit: 'edit'
		},
		{
			sms: 'Emergency SMS to Masseur',
			code: 'CUSTOMER_RESET_PASSWORD',
			edit: 'edit'
		}, {
			sms: 'Emergency SMS to Masseur',
			code: 'EMERGENCY_SMS_FOR_DRIVER_SP',
			edit: 'edit'
		},
	];

	return (
			<div className='smsTemplates'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Sms Templates</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								sms: 'SMS Title',
								code: 'SMS Code',
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
											<Link to={ '/edit_sms_template' }>
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

export default SmsTemplates;