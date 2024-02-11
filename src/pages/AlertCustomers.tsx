import React from 'react';
import Table from '../components/Table';
import { GoCheckCircleFill } from 'react-icons/go';
import { showProfileCustomer } from '../stores/modalContainer';
import { useQuery } from 'react-query';
import { ICustomers } from '../types/customers';
import { getListCustomers } from '../stores/customers';
import Loader from '../components/Loader';
import AlertCustomersFilter from '../components/filter/AlertCustomersFilter';
import { useFilter } from '../stores/filter';

const AlertCustomers = () => {
	const filter = useFilter();

	//todo: статистика отказов от работы

	const {
		data: customers,
		isLoading
	} = useQuery<ICustomers>( [ 'customers', filter.toString() ], () => getListCustomers() );

	return (
			<div className='alertCustomers'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Decline/Cancelled Orders Alert For Customers</div>
					<AlertCustomersFilter/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ customers?.items || [] }
									fields={ {
										firstname: 'Name',
										email: 'E-mail',
										cancelledTrips24: 'Cancelled Trips (in 24 hours)',
										cancelledTripsTotal: 'Total Cancelled Trips (till now)',
										date: 'Block Date',
										block: 'Block Customer'
									} }
									headFieldsClassName={ {
										date: 'thText-center',
										block: 'thText-center'
									} }
									bodyFieldsClassName={ {
										date: 'thText-center',
										block: 'thText-center'
									} }
									columnBody={ {
										firstname: ( items ) =>
												<button onClick={ () => showProfileCustomer( items.id ) } className='linkMassage'>
													{ items.firstname }
												</button>,
										block: ( item ) =>
												<div className='d-flex align-center justify-center'>
													<button className='row align-center justify-center btnBlock'>
														<GoCheckCircleFill className='iconBlock'/>
														No
													</button>
												</div>
									} }
							/>
					}
				</div>
			</div>
	);
};

export default AlertCustomers;