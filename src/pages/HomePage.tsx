import React from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

const HomePage = () => {

	const items = [
		{
			title: 'Home Page - English',
			action: 'action'
		}
	];

	return (
			<div className='editHomePage'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>HOME PAGE CONTENT</div>
					<Table
							items={ items }
							fields={ {
								title: 'Title',
								action: 'Action'
							} }
							bodyFieldsClassName={ {
								action: 'thText-center'
							} }
							headFieldsClassName={ {
								action: 'thText-center'
							} }
							columnBody={ {
								action: ( item ) =>
										<div className='padding5'>
											<Link to={ '/edit_home_page' }>
												<BsPencilSquare className='thIcon'/>
											</Link>
										</div>
							} }
					/>
				</div>
			</div>
	);
};

export default HomePage;