import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const State = () => {

	const items = [
		{
			id: '567',
			state: 'Moscow',
			statecode: '90',
			country: 'Russia',
			status: true,
			actions: 'Actions'
		}
	];

	return (
			<div className='state'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>State</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								state: 'State',
								statecode: 'State Code',
								country: 'Country',
								status: 'Status',
								actions: 'Actions'
							} }
							bodyFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center',
							} }
							headFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center',
							} }
							columnBody={ {
								status: ( item ) => <Status status={ item.status }/>,
								actions: ( item ) =>
										<div className='padding5'>
											<ButtonSettings itemId={ item.id }/>
										</div>
							} }/>
				</div>
			</div>
	);
};

export default State;