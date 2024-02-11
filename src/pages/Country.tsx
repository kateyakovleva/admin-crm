import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import uk from '../images/united-kingdom.png';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';

const Country = () => {

	const items = [
		{
			id: '567',
			flag: 'Flag',
			country: 'UK',
			code: '44',
			status: true,
			actions: 'Actions'
		},
		{
			id: '7',
			flag: 'Flag',
			country: 'Russia',
			code: '7',
			status: true,
			actions: 'Actions'
		}
	];

	return (
			<div className='country'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Country</div>
					<AdminFilter/>
					<Table
							items={ items }
							fields={ {
								flag: 'Flag',
								country: 'Country',
								code: 'Code',
								status: 'Status',
								actions: 'Actions'
							} }
							bodyFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center',
								flag: 'thText-center width-5'
							} }
							headFieldsClassName={ {
								status: 'thText-center',
								actions: 'thText-center',
								flag: 'thText-center width-5'
							} }
							columnBody={ {
								flag: ( item ) =>
										<img src={ uk } className='imgCountry'/>,
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

export default Country;