import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditCancelReason = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editCancelReason'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Cancel Reason</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/cancel_reason' ) }>
							BACK TO LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									status: {
										name: 'Cancel Reason For',
										type: 'select',
										props: {
											containerClassName: 'width-50',
										}
									},
									firstname: {
										name: 'Cancel Reason',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									order: {
										name: 'Order',
										type: 'select',
										props: {
											containerClassName: 'width-50',
										}
									},
								} }
						/>
						<ButtonsCustomForm group={ 'cancel' }/>
					</form>
				</div>
			</div>
	);
};

export default EditCancelReason;