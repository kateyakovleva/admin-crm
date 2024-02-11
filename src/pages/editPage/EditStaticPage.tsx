import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditStaticPage = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editStaticPage'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Static Page</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/pages' ) }>BACK TO LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									group: {
										name: 'Page/Sectioin',
										type: 'input',
										props: {
											containerClassName: 'width-50'
										}
									},
									firstname: {
										name: 'Page Title',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									lastname: {
										name: 'Page Description',
										type: 'textarea',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									pass: {
										name: 'Meta Title',
										type: 'input',
										props: {
											containerClassName: 'width-50',
										}
									},
									pass1: {
										name: 'Meta Keyword',
										type: 'input',
										props: {
											containerClassName: 'width-50',
										}
									},
									pass2: {
										name: 'Meta Description',
										type: 'textarea',
										props: {
											containerClassName: 'width-50',
										}
									},
									image: {
										name: 'Image',
										type: 'file',
										props: {
											containerClassName: 'width-50 mt-10',
										}
									},
								} }
						/>
						<ButtonsCustomForm group={ 'pages' }/>
					</form>
				</div>
			</div>
	);
};

export default EditStaticPage;