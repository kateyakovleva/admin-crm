import React from 'react';

import Table from '../components/Table';
import { useQuery } from 'react-query';
import { ICustomers } from '../types/customers';
import { getListCustomers } from '../stores/customers';
import Loader from '../components/Loader';
import { showProfileCustomer } from '../stores/modalContainer';
import AdminFilter from '../components/filter/AdminFilter';

const CustomerOutstandingReport = () => {

	const { data: customers, isLoading } = useQuery<ICustomers>( [ 'customers' ], () => getListCustomers() );
	if ( isLoading ) return <Loader/>;

	return (
			<div className='customerOutstandingReport'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Outstanding Amount Report</div>
					<AdminFilter/>
					<Table
							items={ customers?.items || [] }
							fields={ {
								username: 'Contact Details',
								amount: 'Outstanding Amount',
								action: 'Action'
							} }
							headFieldsClassName={ {
								action: 'thText-center width-10',
								amount: 'width-15'
							} }
							bodyFieldsClassName={ {
								action: 'thText-center',
								amount: 'thText-right',
							} }
							columnBody={ {
								action: ( item ) =>
										<td className='thInput'>
											<input type='checkbox'/>
										</td>,
								username: ( items ) =>
										<button onClick={ () => showProfileCustomer( items.username ) } className='linkMassage'>
											{ items.username }
										</button>,
							} }
					/>
				</div>
			</div>
	);
};

export default CustomerOutstandingReport;