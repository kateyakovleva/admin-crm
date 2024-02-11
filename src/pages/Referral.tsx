import React from 'react';
import '../styles/reviews.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Table from '../components/Table';
import Notes from '../components/Notes';
import { useQuery } from 'react-query';
import { ICustomers } from '../types/customers';
import { getListCustomers } from '../stores/customers';
import Loader from '../components/Loader';

const Referral = () => {

	const { data: customers, isLoading } = useQuery<ICustomers>( [ 'customers' ], () => getListCustomers() );
	if ( isLoading ) return <Loader/>;

	return (
			<div className='referral'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Referral Report</div>
					<div className='column containerIn mb-10'>
						<Tabs>
							<TabList className='greyHeader border-bottom'>
								<div className='row width-23 absolut'>
									<Tab>Customers</Tab>
									<Tab>Models</Tab>
								</div>
							</TabList>
							<div className='row mb-10'>
								<TabPanel>
									<Table
											items={ customers?.items || [] }
											fields={ {
												username: 'Member Name',
												totalMembersReferred: 'Total Members Referred',
												totalAmountEarned: 'Total Amount Earned',
												detail: 'Detail'
											} }/>
									<Notes/>
								</TabPanel>
								<TabPanel>
									<Table
											items={ [] }
											fields={ {
												name: 'Member Name',
												totalMembersReferred: 'Total Members Referred',
												totalAmountEarned: 'Total Amount Earned',
												detail: 'Detail'
											} }/>
									<Notes/>
								</TabPanel>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
	);
};

export default Referral;