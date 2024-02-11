import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const CancelReason = () => {

	const items = [
		{
			id: '456',
			reason: 'Masseur did not follow Covid-19 Safety Standards',
			order: '6',
			status: true,
			actions: 'Action'
		},
		{
			id: '787',
			reason: 'Masseur doesnt have right necessary equipments to complete work',
			order: '36',
			status: true,
			actions: 'Action'
		},
	];

	return (
			<div className='cancelReason'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Cancel Reason</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								reason: 'Reason',
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
				</div>
			</div>
	);
};

export default CancelReason;