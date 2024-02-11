import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import SearchOrders from '../components/filter/SearchOrders';

const PaytmentSupportRequests = () => {

	const items = [
		{}
	];

	return (
			<div className='paymentSupportRequests'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Payment Requests</div>
					<SearchOrders/>
					<Table items={ items } fields={ {
						details: 'Contact Details',
						detailsorer: 'Orders Details',
						detailsbank: 'Bank Details',
						message: 'Message',
						date: 'Date'
					} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default PaytmentSupportRequests;