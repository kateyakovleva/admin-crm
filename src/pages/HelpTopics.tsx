import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const HelpTopics = () => {

	const items = [
		{
			id: '98877',
			title: 'Masseur reaches late',
			category: 'Masseur was unprofessional',
			order: '6',
			status: true,
			actions: 'Action'
		}
	];

	return (
			<div className='helpTopics'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Help Topics</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								title: 'Title',
								category: 'Category',
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

export default HelpTopics;