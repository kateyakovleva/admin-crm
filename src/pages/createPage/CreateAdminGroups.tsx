import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/editAdminGroups.scss';
import { useQuery } from 'react-query';
import { useStore } from 'effector-react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getListPermissions } from '../../stores/permissions';
import { IRoleID } from '../../types/roles';
import Loader from '../../components/Loader';
import { IPermissionGroup } from '../../types/permissions';
import { $languages } from '../../stores/language';
import { createAdminGroup, getRoleID } from '../../stores/roles';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import Permission1 from '../editPage/editAdminGroup/Permission1';


const CreateAdminGroups = () => {

	const languages = useStore( $languages );
	const { id } = useParams();
	const navigate = useNavigate();


	const { data: permissions, isLoading: isLoadingPerm } = useQuery( [ 'permissions' ], () => getListPermissions() );

	const { data: roleID, isLoading } = useQuery<IRoleID>( [ 'roleID' ], () => getRoleID( id ) );
	if ( isLoading || isLoadingPerm ) return <Loader/>;


	const _permissions: { [ groupName: string ]: IPermissionGroup } = {};


	// permission.group = 'admins';
	//
	// _permissions.admins
	//
	// _permissions[permission.group]

	permissions?.items.forEach( permission => {
		if ( !_permissions[ permission.group ] ) {
			_permissions[ permission.group ] = {
				group: permission.group,
				actions: []
			};
		}
		_permissions[ permission.group ].actions.push( permission.action );
	} );

	const permiss = Object.values( _permissions ); //берет все значения объекта и создает массив со всеми значениями этого объекта


	const create = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		await createAdminGroup( data );
	};

	return (
			<div className='editAdminGroups'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Create Admin Groups</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/admin/roles' ) }>BACK TO LISTING
						</button>
					</div>
					<Tabs>
						<TabList>
							<div className='row absolut'>
								{ languages.map( language =>
										<Tab key={ language.id }>{ language.name }</Tab>
								) }
							</div>
						</TabList>
						<div className='row mt-40 mb-10 border-top'>
							{ languages.map( language =>
									<TabPanel key={ language.id } className='row mt-10'>
										<form onSubmit={ create }>
											<CustomForm
													key={ roleID?.id }
													item={ roleID }
													fields={ {
														name: {
															name: 'Group Name',
															inputName: `name.${ language.language }`, //чтение нейма в котором содержится объект, его нельзя было прочесть, чтобы это сделать - куча строк в кастом форм
															type: 'input',
															props: {
																containerClassName: 'width-100',
																required: true
															}
														},
													} }/>
										</form>
									</TabPanel>
							) }
						</div>
					</Tabs>
					<div className='column containerBlue mt-10'>
						<div className='row justify-between align-center topLineBlue'>
							<div className='titleBlue'>Group Permissions</div>
							<div className='row width-50 justify-center align-center'>
								<input type='input' className='input width-70'/>
								<div className='row justify-center align-center'>
									<button className='blueButton'>Select All</button>
									<button className='redButton'>De-Select All</button>
								</div>
							</div>
						</div>
						<div className='column padding20'>
							{ permiss.map( permissionGroup =>
									<Permission1 key={ permissionGroup.group } permissionGroup={ permissionGroup }/>
							) }
						</div>
					</div>
					<ButtonsCustomForm group={ 'admins' }/>
				</div>
			</div>
	);
};

export default CreateAdminGroups;