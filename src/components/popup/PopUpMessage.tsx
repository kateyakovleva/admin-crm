import React from 'react';
import '../../styles/popup.scss';
import { hideModalMessage } from '../../stores/modalContainer';

const PopUpMessage = () => {


	return (
			<div className='profile'>
				<div className='column container'>
					<div className='relativeMessage'>
						<div className='d-flex width-100 headerMessage mb-10'>
							<div className='padding20'>Message</div>
						</div>
						<div className='colorBlack padding20 mb-20'>dhgukyguiery htuyet ui3y34 gjergireuyo8uy83</div>
						<button className='btnMessage' onClick={ () => hideModalMessage() }>OK</button>
					</div>
				</div>
			</div>
	);
};

export default PopUpMessage;