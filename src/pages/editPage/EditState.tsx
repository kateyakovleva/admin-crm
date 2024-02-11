import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditState = () => {

	const navigate = useNavigate();

	// const {data: country, isLoading} = useQuery('')

	const country: any = {};

	return (
			<div className='editState'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit State</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/localization/state' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm fields={ {
							firstname: {
								name: 'Country Name',
								type: 'select',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							lastname: {
								name: 'State Name',
								type: 'input',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							email: {
								name: 'State Code',
								type: 'input',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							group: {
								name: 'Status',
								type: 'checkbox',
								props: {
									containerClassName: 'width-50',
								}
							},
						} }/>
						<ButtonsCustomForm group={ 'state' }/>
					</form>
				</div>
			</div>
	);
};

export default EditState;