import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditEmailTemplate = () => {

	const navigate = useNavigate();

	const what: any = {};

	return (
			<div className='editEmailTemplate'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Email Template</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/settings/email_templates' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									group: {
										name: 'Purpose',
										type: 'input',
										props: {
											containerClassName: 'width-50'
										}
									},
									name: {
										name: 'Email Subject',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									firstname: {
										name: 'Email Body',
										type: 'textarea',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
								} }/>
						<ButtonsCustomForm group={ 'templates' }/>
					</form>
				</div>
			</div>
	);
};

export default EditEmailTemplate;