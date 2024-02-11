import React from 'react';
import Table from '../components/Table';
import Notes from '../components/Notes';
import { useQuery } from 'react-query';
import { getListRoles } from '../stores/roles';
import { IRoles } from '../types/roles';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import Loader from '../components/Loader';
import Status from '../components/status/Status';
import AdminGroupFilter from '../components/filter/AdminGroupFilter';
import SelectorActions from '../components/selectors/SelectorActions';
import { useFilter } from '../stores/filter';

const AdminGroups = () => {
	const filter = useFilter();

	const { data: roles, isLoading } = useQuery<IRoles>( [ 'roles', filter.toString() ], () => getListRoles() );

	return (
			<div className='adminGroups'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Admin Groups</div>
					<AdminGroupFilter/>
					<SelectorActions/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ roles?.items || [] }
									fields={ {
										name: 'Group Name',
										permissions: 'Permissions',
										status: 'Status',
										actions: 'Actions'
									} }
									bodyFieldsClassName={ {
										name: 'width-15',
										permissions: 'padding5',
										status: 'thText-center',
										actions: 'thText-center',
									} }
									headFieldsClassName={ {
										status: 'thText-center',
										actions: 'thText-center'
									} }
									columnBody={ {
										status: ( item ) => <Status status={ item.status }/>,
										actions: ( item ) =>
												<div className='padding5'>
													<Link to={ `${ item.id }` }>
														<BsPencilSquare className='thIcon'/>
													</Link>
												</div>,
										permissions: ( item ) => item.permissions?.map( p => p.group + ':' + p.action ).join( ', ' )
									} }
							/>
					}
					<Notes/>
				</div>
			</div>
	);
};

export default AdminGroups;