import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import ButtonSettings from '../components/ButtonSettings';
import { useQuery } from 'react-query';
import { getListCustomers } from '../stores/customers';
import { ICustomers } from '../types/customers';
import { showProfileCustomer } from '../stores/modalContainer';
import Status from '../components/status/Status';
import CustomerFilter from '../components/filter/CustomerFilter';
import SelectorActions from '../components/selectors/SelectorActions';
import { useFilter } from '../stores/filter';
import Loader from '../components/Loader';

const Customers = () => {
	const filter = useFilter();

	const {
		data: customers,
		isLoading
	} = useQuery<ICustomers>( [ 'customers', filter.toString() ], () => getListCustomers() );

	return (
			<div className='users'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Customers</div>
					<CustomerFilter/>
					<SelectorActions/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ customers?.items || [] }
									fields={ {
										username: 'Customer name',
										email: 'Email',
										telephone: 'Mobile',
										balance: 'Balance',
										created_at: 'Signup day',
										status: 'Status',
										actions: 'Actions'
									} }
									headFieldsClassName={ {
										status: 'thText-center',
										actions: 'thText-center'
									} }
									bodyFieldsClassName={ {
										status: 'thText-center',
										actions: 'thText-center'
									} }
									columnBody={ {
										created_at: ( item ) =>
												<div>
													{
														item.created_at.substring( 0, 10 )
													}
												</div>,
										firstname: ( item ) =>
												<button onClick={ () => showProfileCustomer( item.id ) } className='linkMassage'>
													{ item.firstname }
												</button>,
										balance: ( item ) =>
												<div>
													<div className='amount'>{ item.balance }</div>
													<button className='btnAddbalance mb-5'>Add balance</button>
												</div>,
										status: ( item ) => <Status status={ item.status }/>,
										actions: ( item ) =>
												<div className='padding5'>
													<ButtonSettings itemId={ item.id }/>
												</div>
									} }
							/>
					}
					<Notes/>
				</div>
			</div>
	);
};

export default Customers;