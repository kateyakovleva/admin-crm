import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditHelpTopics = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editHelpTopics'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Help Topics</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/help_topics' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									name: {
										name: 'Category',
										type: 'select',
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
									order: {
										name: 'Order',
										type: 'select',
										props: {
											containerClassName: 'width-50 mt-20',
										}
									},
									firstname: {
										name: 'Question',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									first: {
										name: 'Answer',
										type: 'textarea',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									order1: {
										name: 'Show Contact Form',
										type: 'select',
										props: {
											containerClassName: 'width-50 mt-20',
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

export default EditHelpTopics;