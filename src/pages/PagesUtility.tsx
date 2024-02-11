import React from 'react';

import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const PagesUtility = () => {

	const item = [
		{
			id: '456',
			name: '404-ERROR',
			title: '404-ERROR',
			status: true,
			edit: 'Edit'
		},
		{
			id: '6',
			name: 'Forgot-Password',
			title: 'Forgot-Password',
			status: true,
			edit: 'Edit'
		}
	];

	return (
			<div className='pageUtility'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Other Pages</div>
					<AdminFilter/>
					<Table
							items={ item }
							fields={ {
								name: 'Name',
								title: 'Page Title',
								status: 'Status',
								edit: 'Edit'
							} }
							bodyFieldsClassName={ {
								status: 'thText-center',
								edit: 'thText-center'
							} }
							headFieldsClassName={ {
								status: 'thText-center',
								edit: 'thText-center'
							} }
							columnBody={ {
								status: ( item ) => <Status status={ item.status }/>,
								edit: ( item ) =>
										<div className='padding5'>
											<Link to={ '/edit_static_page' }>
												<BsPencilSquare className='thIcon'/>
											</Link>
										</div>
							} }
					/>
				</div>
			</div>
	);
};

export default PagesUtility;