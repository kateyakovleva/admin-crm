import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditNews = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editNews'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit News</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/news' ) }>BACK TO LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									firstname: {
										name: 'Select User Type',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									image: {
										name: 'Image',
										type: 'file',
										props: {
											containerClassName: 'width-50',
										}
									},
									status: {
										name: 'Status',
										type: 'checkbox',
										props: {
											containerClassName: 'width-50 mt-20',
										}
									},
									name: {
										name: 'Title',
										type: 'input',
										props: {
											containerClassName: 'width-50 mt-20',
											required: true
										}
									},
									lastname: {
										name: 'Description',
										type: 'textarea',
										props: {
											containerClassName: 'width-50'
										}
									},
								} }
						/>
						<ButtonsCustomForm group={ 'news' }/>
					</form>
				</div>
			</div>
	);
};

export default EditNews;