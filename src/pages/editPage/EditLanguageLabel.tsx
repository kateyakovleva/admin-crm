import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditLanguageLabel = () => {

	const navigate = useNavigate();

	const what: any = {};

	return (
			<div className='editLanguageLabel'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Language Label</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/settings/language_labels' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm
								item={ what }
								fields={ {
									group: {
										name: 'Language Label',
										type: 'input',
										props: {
											containerClassName: 'width-50'
										}
									},
									firstname: {
										name: 'Language Label Value',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
								} }/>
						<ButtonsCustomForm group={ 'language' }/>
					</form>
				</div>
			</div>
	);
};

export default EditLanguageLabel;