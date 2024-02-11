import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import AdminFilter from '../components/filter/AdminFilter';

const Newsletter = () => {

	const items = [
		{}
	];

	return (
			<div className='newsLetter'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Newsletter Subscribers</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								name: 'Name',
								email: 'E-mail',
								status: 'Status',
								date: 'Date',
								ip: 'IP address'
							} }
					/>
					<Notes/>
				</div>
			</div>
	);
};

export default Newsletter;