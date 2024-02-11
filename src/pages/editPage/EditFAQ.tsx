import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditFaq = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editFaq'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit FAQ</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/faq' ) }>BACK TO LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									firstname: {
										name: 'Category',
										type: 'input',
										props: {
											containerClassName: 'width-50',
										}
									},
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
									question: {
										name: 'Question',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									lastname: {
										name: 'Answer',
										type: 'textarea',
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

export default EditFaq;