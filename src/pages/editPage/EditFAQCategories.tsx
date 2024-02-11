import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditFaqCategories = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editFaqCategories'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit FAQ Categories</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/faq_categories' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									status: {
										name: 'Status',
										type: 'checkbox',
										props: {
											containerClassName: 'width-50',
										}
									},
									name: {
										name: 'Order',
										type: 'select',
										props: {
											containerClassName: 'width-50 mt-20',
										}
									},
									firstname: {
										name: 'FAQ Category Label',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
								} }
						/>
						<ButtonsCustomForm group={ 'faq' }/>
					</form>
				</div>
			</div>
	);
};

export default EditFaqCategories;