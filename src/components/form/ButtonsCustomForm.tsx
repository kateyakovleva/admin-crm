import React from 'react';
import Access from '../access/Access';

const ButtonsCustomForm = ( { group }: any ) => {
	return (
			<div className='row width-15 justify-between mb-20 mt-20'>
				<Access group={ group } action='update'>
					<button className='btnEdit' type='submit'>Update</button>
				</Access>
				<button className='btnEdit' type='button'>Cancel</button>
			</div>
	);
};

export default ButtonsCustomForm;