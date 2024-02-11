import React from 'react';
import CustomForm from '../components/form/CustomForm';
import Access from '../components/access/Access';

const SendPushNotification = ( { group }: any ) => {

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='sendNotification'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Send Push-Notification</div>
					<CustomForm
							item={ what }
							fields={ {
								status: {
									name: 'Country Name',
									type: 'select',
									props: {
										containerClassName: 'width-50',
										required: true
									}
								},
								order: {
									name: 'Select Type',
									type: 'select',
									props: {
										containerClassName: 'width-50',
										required: true
									}
								},
								firstname: {
									name: 'Message',
									type: 'textarea',
									props: {
										containerClassName: 'width-50',
										required: true
									}
								},

							} }
					/>
					<Access group={ 'notification' } action='send'>
						<button className='btnEdit width-10 mt-20' type='button'>Send Notification</button>
					</Access>
				</div>
			</div>
	);
};

export default SendPushNotification;