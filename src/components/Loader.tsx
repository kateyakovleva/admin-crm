import React from 'react';
import ReactLoading from 'react-loading';

interface IProps {
	position?: 'fixed' | 'static';
}

const Loader = ( { position = 'fixed' }: IProps ) => {
	return (
			<div className='loader' style={ { position } }>
				<ReactLoading type={ 'spinningBubbles' } color={ '#CA85A9FF' } width={ '100px' } height={ '100px' }/>
			</div>
	);
};

export default Loader;