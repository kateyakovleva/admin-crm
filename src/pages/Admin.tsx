import React from 'react';

import Table from '../components/Table';
import Notes from '../components/Notes';
import ButtonSettings from '../components/ButtonSettings';
import { useQuery } from 'react-query';
import { getListAdmins } from '../stores/admins';
import { IAdmins } from '../types/admins';
import Loader from '../components/Loader';
import AdminFilter from '../components/filter/AdminFilter';
import Status from '../components/status/Status';
import SelectorActions from '../components/selectors/SelectorActions';
import { useFilter } from '../stores/filter';


const Admin = () => {
	const filter = useFilter();

	const { data: admins, isLoading } = useQuery<IAdmins>( [ 'admins', filter.toString() ], () => getListAdmins() );

	return (
			<div className='admin'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Admin</div>
					<AdminFilter/>
					<SelectorActions/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ admins?.items || [] }
									fields={ {
										firstname: 'Name',
										email: 'Email',
										roles: 'Roles',
										status: 'Status',
										actions: 'Actions'
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
												</div>,
										roles: ( item ) => item.roles.map( r => r.name ).join( ', ' ) //создаем новый массив, в котором лежат только строки с именем, а не сложные объекты
									} }
							/>

					}
					<Notes/>
				</div>
			</div>
	);
};

export default Admin;