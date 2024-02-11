import React from 'react';

import Table from '../components/Table';
import { useQuery } from 'react-query';
import { getListOrders } from '../stores/orders';
import Loader from '../components/Loader';
import SearchOrders from '../components/filter/SearchOrders';

const Payment = () => {

	const { data: orders, isLoading } = useQuery( [ 'orders' ], () => getListOrders() );
	if ( isLoading ) return <Loader/>;

	return (
			<div className='payment'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Payment Report</div>
					<SearchOrders/>
					<Table
							items={ orders?.items || [] }
							fields={ {
								id: 'Order Number',
								names: 'Customer Name',
								orderDate: 'Order Date',
								total: 'Total Price',
								commission: 'Commission',
								siteEarning: 'Site Earning',
								status: 'Order Status',
								settle: 'Settle',
								paymentStatus: 'Payment Status',// ЧТО ТУТ ДЕЛАТЬ
							} }
							headFieldsClassName={ {
								names: 'width-23',
								commission: 'thText-right',
								siteEarning: 'thText-right',
								status: 'thText-center',
								settle: 'thText-center',
								paymentStatus: 'thText-center',
							} }
							bodyFieldsClassName={ {
								names: 'width-23',
								commission: 'thText-right',
								siteEarning: 'thText-right',
								status: 'thText-center',
								settle: 'thText-center',
								paymentStatus: 'thText-center',
							} }
					/>
				</div>
			</div>
	);
};

export default Payment;