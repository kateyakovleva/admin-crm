import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import { useQuery } from 'react-query';
import { ICustomerID } from '../../types/customers';
import { createCustomer, getCustomerID } from '../../stores/customers';
import Loader from '../../components/Loader';

const CreateCustomers = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: customerID, isLoading } = useQuery<ICustomerID>( [ 'customerID' ], () => getCustomerID( id ) );
	if ( isLoading ) return <Loader/>;

	const create = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		await createCustomer( data );
	};

	return (
			<div className='editCustomer'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Create Customer</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/customers' ) }>BACK TO LISTING
						</button>
					</div>
					<form onSubmit={ create }>
						<CustomForm
								key={ customerID?.id }
								item={ customerID }
								fields={ {
									username: {
										name: 'First Name',
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
											containerClassName: 'width-50'
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
									file: {
										name: 'Profile Picture',
										type: 'file',
										props: {
											containerClassName: 'width-50 mb-20'
										}
									},
									country: {
										name: 'Country',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									telephone: {
										name: 'Phone',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									checkbox: {
										name: 'Status',
										type: 'checkbox',
									},
								} }
						/>
						<ButtonsCustomForm group={ 'customers' }/>
					</form>
				</div>
			</div>
	);
};

export default CreateCustomers;