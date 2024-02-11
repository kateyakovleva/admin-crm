import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const FaqCategories = () => {

	const items = [
		{
			id: '456',
			title: 'General',
			order: '6',
			status: true,
			actions: 'Action'
		},
		{
			id: '787',
			title: 'Customer',
			order: '36',
			status: true,
			actions: 'Action'
		},
	];

	return (
			<div className='faqCategories'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>FAQ Categories</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								title: 'Title',
								order: 'Order',
								status: 'Status',
								actions: 'Action'
							} }
							bodyFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center'
							} }
							headFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center'
							} }
							columnBody={ {
								status: ( item ) => <Status status={ item.status }/>,
								actions: ( item ) =>
										<div className='padding5'>
											<ButtonSettings itemId={ item.id }/>
										</div>
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default FaqCategories;