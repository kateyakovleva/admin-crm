import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import { createAdmin } from '../../stores/admins';

const CreateAdmin = () => {
	const navigate = useNavigate();

	const create = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		await createAdmin( data );
	};

	return (
			<div className='editAdmin'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Create Admin</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/admin/list' ) }>BACK TO LISTING
						</button>
					</div>
					<form onSubmit={ create }>
						<CustomForm
								item={ {} }
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

export default CreateAdmin;