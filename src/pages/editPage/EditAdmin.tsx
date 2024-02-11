import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import Loader from '../../components/Loader';
import { useQuery } from 'react-query';
import { IAdminID } from '../../types/admins';
import { getAdminID, saveAdmin } from '../../stores/admins';

const EditAdmin = () => {
	const { id } = useParams();
	const navigate = useNavigate();


	const { data: adminID, isLoading } = useQuery<IAdminID>( [ 'adminID' ], () => getAdminID( id ) );
	if ( isLoading ) return <Loader/>;

	const save = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		if ( id ) await saveAdmin( id, data );
	};

	return (
			<div className='editAdmin'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Admin Alex*****</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/admin/list' ) }>BACK TO LISTING
						</button>
					</div>
					<form onSubmit={ save }>
						<CustomForm
								key={ adminID?.id }
								item={ adminID }
								fields={ {
									group: {
										name: 'Group',
										type: 'select',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									firstname: {
										name: 'First Name',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									username: {
										name: 'User Name',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									email: {
										name: 'E-mail',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									pass: {
										name: 'Password',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									status: {
										name: 'Status',
										type: 'checkbox',
										props: {
											containerClassName: 'width-50',
										}
									}
								} }
						/>
						<ButtonsCustomForm group={ 'admins' }/>
					</form>
				</div>
			</div>
	);
};

export default EditAdmin;