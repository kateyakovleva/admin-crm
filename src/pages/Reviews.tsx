import React from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import '../styles/reviews.scss';
import Table from '../components/Table';
import Notes from '../components/Notes';
import { useQuery } from 'react-query';
import { IReviews } from '../types/reviews';
import { getListReviews } from '../stores/reviews';
import ReviewsFilter from '../components/filter/ReviewsFilter';
import { useFilter } from '../stores/filter';
import Loader from '../components/Loader';

const Reviews = () => {
	const filter = useFilter();

	const { data: reviews, isLoading } = useQuery<IReviews>( [ 'reviews', filter.toString() ], () => getListReviews() );

	return (
			<div className='reviews'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Reviews</div>
					<ReviewsFilter/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<div className='column containerIn mb-10'>
								<Tabs>
									<TabList className='greyHeader border-bottom'>
										<div className='row width-23 absolut'>
											<Tab>Model</Tab>
											<Tab>Customers</Tab>
										</div>
									</TabList>
									<div className='row mb-10'>
										<TabPanel>
											<Table
													items={ reviews?.items || [] }
													fields={ {
														id: 'Order Number',
														name: 'Questionnair',
														rating: 'Rating',
														created_at: 'Date',
														comment: 'Comment'
													} }
													bodyFieldsClassName={ {
														comment: 'width-35'
													} }
													headFieldsClassName={ {
														comment: 'width-35'
													} }
											/>
											<Notes/>
										</TabPanel>
										<TabPanel>
											<Table
													items={ reviews?.items || [] }
													fields={ {
														id: 'Order Number',
														firstname: 'Customer',
														rating: 'Rate',
														orderDate: 'Date',
														comment: 'Comment'
													} }
													bodyFieldsClassName={ {
														comment: 'width-35'
													} }
													headFieldsClassName={ {
														comment: 'width-35'
													} }
											/>
											<Notes/>
										</TabPanel>
									</div>
								</Tabs>
							</div>
					}
				</div>
			</div>
	);
};

export default Reviews;