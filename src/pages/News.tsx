import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const News = () => {

	const items = [
		{
			id: '678',
			title: 'Why does my heart steal lonely?',
			date: 'Jan 13, 2022',
			status: true,
			users: 'All',
			actions: 'action'
		}
	];

	return (
			<div className='news'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>News</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								title: 'Title',
								date: 'Published date',
								status: 'Status',
								users: 'User type',
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

export default News;