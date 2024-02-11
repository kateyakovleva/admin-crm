import React from 'react';
import { useStore } from 'effector-react';
import { $modalMessage, $profileCustomer } from '../stores/modalContainer';
import ProfileCustomer from './popup/ProfileCustomer';
import PopUpMessage from './popup/PopUpMessage';

const ModalContainer = () => {

	const visibleProfileCustomer = useStore( $profileCustomer );

	const visibleModalMessage = useStore( $modalMessage );

	return (
			<div>
				{ visibleProfileCustomer &&
						<ProfileCustomer/>
				}

				{
						visibleModalMessage &&
						<PopUpMessage/>
				}

			</div>
	);
};

export default ModalContainer;