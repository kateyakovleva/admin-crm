import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import { useQuery } from 'react-query';
import { getAdvertisementID, saveAdvertisement } from '../../stores/advertisement';
import Loader from '../../components/Loader';

const EditAdvertisement = () => {

	const { id } = useParams();
	const navigate = useNavigate();

	const { data: advertisementID, isLoading } = useQuery( [ 'advertisementID' ], () => getAdvertisementID( id ) );
	if ( isLoading ) return <Loader/>;

	const save = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		if ( id ) await saveAdvertisement( id, data );
	};


	return (
			<div className='editAdvertisement'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Create Banners</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/advertisement' ) }>BACK TO LISTING
						</button>
					</div>
					<form onSubmit={ save }>
						<CustomForm
								key={ advertisementID?.id }
								item={ advertisementID }
								fields={ {
									name: {
										name: 'Advertisement Name',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									image: {
										name: 'Advertisement Image',
										type: 'image',
										props: {
											containerClassName: 'width-50',
										}
									},
									file: {
										name: 'Choose New Image',
										type: 'file',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									redirect: {
										name: 'Redirect Url',
										type: 'input',
										props: {
											containerClassName: 'width-50'
										}
									},
									activation: {
										name: 'Activation Date:',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									deactivation: {
										name: 'Expiry Date:',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									status: {
										name: 'Status',
										type: 'select',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
								} }/>
						<ButtonsCustomForm group={ 'advertisement' }/>
					</form>
				</div>
			</div>
	);
};

export default EditAdvertisement;