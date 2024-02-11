import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import { showModalMessage, showProfileCustomer } from '../stores/modalContainer';
import SearchOrders from '../components/filter/SearchOrders';

const ContactUs = () => {

	const items = [
		{
			id: '2',
			firstname: 'Klaudia*****',
			subject: 'foo****************',
			message: 'message',
			date: 'Nov 10, 2023'
		}
	];

	return (
			<div className='contactUs'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Contact Us Form Requests</div>
					<SearchOrders/>
					<Table
							items={ items }
							fields={ {
								details: 'Contact Details',
								subject: 'Subject',
								message: 'Message',
								date: 'Date'
							} }
							columnBody={ {
								details: ( items ) =>
										<button onClick={ () => showProfileCustomer( items.id ) } className='linkMassage'>
											{ items.firstname }
										</button>,
								message: ( items ) =>
										<button onClick={ () => showModalMessage( items.id ) } className='linkMassage'>
											view massage
										</button>
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default ContactUs;