import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getListOrders } from '../stores/orders';
import { IOrders } from '../types/orders';
import Loader from '../components/Loader';
import { showProfileCustomer } from '../stores/modalContainer';
import SearchOrders from '../components/filter/SearchOrders';

const Orders = () => {

	const { data: orders, isLoading } = useQuery<IOrders>( [ 'jobs' ], () => getListOrders() );
	if ( isLoading ) return <Loader/>;

	return (
			<div className='jobs'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Orders</div>
					<div className='h3 colorBlack mb-20'>Search Orders...</div>
					<SearchOrders/>
					<Table
							items={ orders?.items || [] }
							fields={ {
								//todo: invoiceId, commission, siteEarning
								id: 'Booking number',
								deliveryAddress: 'Address',
								created_at: 'Order Date',
								customer: 'Customer',
								total: 'Price',
								products: 'Products',
								invoiceId: 'View Invoice',
							} }
							bodyFieldsClassName={ {
								total: 'thText-right',
								products: 'thText-center',
								invoiceId: 'thText-center width-10'
							} }
							headFieldsClassName={ {
								total: 'thText-right',
								products: 'thText-center',
								invoiceId: 'thText-center width-10'
							} }
							columnBody={ {
								invoiceId: ( item ) =>
										<div className='width-80 padding15'>
											<Link to={ String( item.id ) } className='invoiceBtn'>View invoice</Link>
										</div>,
								customer: ( item ) =>
										<button onClick={ () => showProfileCustomer( item.id ) } className='linkMassage'>

										</button>,
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default Orders;