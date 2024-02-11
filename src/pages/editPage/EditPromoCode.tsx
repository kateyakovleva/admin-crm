import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import { IPromoCode } from '../../types/promocode';
import { getPromoCodeID, savePromoCode } from '../../stores/promocodes';

const EditPromoCode = () => {

	const { id } = useParams();
	const navigate = useNavigate();

	const { data: promocodeID, isLoading } = useQuery<IPromoCode>( [ 'promocodeID' ], () => getPromoCodeID( id ) );
	if ( isLoading ) return <Loader/>;

	const save = async ( e: any ) => {
		e.preventDefault(); //это отмена предустановленного поведения браузера

		const data = new FormData( e.target ); //в переменную data мы передаем форму и проверяем условием - если форма содержит id, выполняем функцию saveAdmin(в которую передаем id data) всю инфу отправляем

		if ( id ) await savePromoCode( id, data );
	};

	return (
			<div className='editPromocode'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit PromoCode</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/promocode' ) }>BACK TO LISTING
						</button>
					</div>
					<form onSubmit={ save }>
						<CustomForm
								key={ promocodeID?.id }
								item={ promocodeID }
								fields={ {
									couponcode: {
										name: 'Coupon Code:',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									description: {
										name: 'Description:',
										type: 'textarea',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									discount: {
										name: 'Discount',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
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
									limit: {
										name: 'Usage Limit',
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
								} }
						/>
						<ButtonsCustomForm group={ 'promo' }/>
					</form>
				</div>
			</div>
	);
};

export default EditPromoCode;