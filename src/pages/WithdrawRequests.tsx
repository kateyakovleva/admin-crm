import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import SearchOrders from '../components/filter/SearchOrders';

const WithdrawRequests = () => {

	const items = [
		{}
	];

	return (
			<div className='withdrawRequests'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Withdraw Requests</div>
					<SearchOrders/>
					<Table items={ items } fields={ {
						details: 'Contact Details',
						detailsorer: 'Orders Details',
						detailsbank: 'Bank Details',
						balance: 'Wallet Balance',
						date: 'Date'
					} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default WithdrawRequests;