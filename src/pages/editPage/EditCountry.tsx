import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditCountry = () => {

	const navigate = useNavigate();

	// const {data: country, isLoading} = useQuery('')

	const country: any = {};

	return (
			<div className='editCountry'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Country</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/localization/country' ) }>BACK TO
							LISTING
						</button>
					</div>
					<form>
						<CustomForm fields={ {
							firstname: {
								name: 'Country Name',
								type: 'input',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							lastname: {
								name: 'Country Code',
								type: 'input',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							email: {
								name: 'Country Phone Code',
								type: 'input',
								props: {
									containerClassName: 'width-50',
									required: true
								}
							},
							pass: {
								name: 'Country Icon',
								type: 'file',
								props: {
									containerClassName: 'width-50 mt-10',
									required: true
								}
							},
							group: {
								name: 'Status',
								type: 'checkbox',
								props: {
									containerClassName: 'width-50 mt-20',
								}
							},
						} }/>
						<ButtonsCustomForm group={ 'country' }/>
					</form>
				</div>
			</div>
	);
};

export default EditCountry;