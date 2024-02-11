import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import SearchOrders from '../components/filter/SearchOrders';

const OrdersHelp = () => {

	const items = [
		{}
	];

	return (
			<div className='ordersHelp'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Orders Help Requests</div>
					<SearchOrders/>
					<Table items={ items } fields={ {
						id: 'Order Number',
						details: 'Contact Details',
						subject: 'Subject',
						message: 'Message',
						date: 'Date'
					} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default OrdersHelp;