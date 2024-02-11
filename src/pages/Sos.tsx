import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import { showModalMessage } from '../stores/modalContainer';
import SearchOrders from '../components/filter/SearchOrders';

const Sos = () => {

	const items = [
		{
			id: '9890898',
			firstname: 'Monica*****',
			message: 'Message',
			date: 'Jul, 4 2023'
		}
	];

	return (
			<div className='sos'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>SOS Requests</div>
					<SearchOrders/>
					<Table
							items={ items }
							fields={ {
								id: 'Order Number',
								details: 'Contact Details',
								message: 'Message',
								date: 'Date'
							} }
							columnBody={ {
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

export default Sos;