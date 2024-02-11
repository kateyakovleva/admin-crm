import React from 'react';
import SearchOrders from '../components/filter/SearchOrders';


const Wallet = () => {
	return (
			<div className='wallet'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Wallet Report</div>
					<div className='h3 colorBlack mb-20'>Search by Date...</div>
					<SearchOrders/>
				</div>
			</div>
	);
};

export default Wallet;