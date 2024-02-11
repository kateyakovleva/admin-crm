import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditHelpTopicsCategories = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editHelpTopicsCategories'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Help Topics Categories</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/help_topics_categories' ) }>
							BACK TO LISTING
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
										name: 'Help Category',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
								} }
						/>
						<ButtonsCustomForm group={ 'help' }/>
					</form>
				</div>
			</div>
	);
};

export default EditHelpTopicsCategories;