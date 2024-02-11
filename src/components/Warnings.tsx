import React from 'react';
import '../styles/warnings.scss';
import { useStore } from 'effector-react';
import { $alert, hideAlert } from '../stores/warnings';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Warnings = () => {

	const alert = useStore( $alert );

	if ( !alert ) return <></>;

	return (
			<div className='warnings width-23'>
				<div className={ 'alert ' + alert?.type }>
					{ alert?.message }
				</div>
				<IoCloseCircleOutline className='iconWarnings' onClick={ () => hideAlert() }/>
			</div>
	);
};

export default Warnings;