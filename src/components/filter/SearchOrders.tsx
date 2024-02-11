import React, { useState } from 'react';
import '../../styles/searchOrders.scss';
import Select from 'react-select';

const options = [
	{ value: 'All status', label: 'All Status' },
	{ value: 'On Going Job', label: 'On Going Job' },
	{ value: 'Completed', label: 'Completed' },
	{ value: 'Cancelled', label: 'Cancelled' },
];

const SearchOrders = () => {

	const [ selectedOption, setSelectedOption ] = useState( options[ 0 ] );
	const change = ( value: any ) => {
		setSelectedOption( value );
	};

	return (
			<div className='searchJob column justify-center mb-10'>
				<div className='row justify-between align-center width-70 mb-10'>
					<a href='/' className='aSearchJob mr-10'>Today</a>
					<a href='/' className='aSearchJob mr-10'>Yesterday</a>
					<a href='/' className='aSearchJob mr-10'>Current Week</a>
					<a href='/' className='aSearchJob mr-10'>Previous Week</a>
					<a href='/' className='aSearchJob mr-10'>Current Month</a>
					<a href='/' className='aSearchJob mr-10'>Previous Month</a>
					<a href='/' className='aSearchJob mr-10'>Current Year</a>
					<a href='/' className='aSearchJob mr-10'>Previous Year</a>
				</div>
				<div className='column'>
					<div className='row width-100 align-center justify-between mb-20'>
						<input type='date' data-placeholder='From date' required aria-required='true' className='input width-23'/>
						<input type='date' data-placeholder='To date' required aria-required='true' className='input width-23'/>
						<Select
								className='selector-large width-23'
								defaultValue={ selectedOption }
								onChange={ change }
								options={ options }
						/>
						<input type='text' className='input width-23' placeholder='Job number'/>
					</div>
					<div className='row width-50 align-start justify-between mb-20'>
						<Select
								className='selector-large selector-large-jobs'
								defaultValue={ selectedOption }
								onChange={ change }
								options={ options }
						/>
						<Select
								className='selector-large selector-large-jobs'
								defaultValue={ selectedOption }
								onChange={ change }
								options={ options }
						/>
					</div>
				</div>
				<div className='row width-100 align-center justify-center mb-20'>
					<div className='row width-35 align-center justify-between'>
						<button type='button' className='btn width-23'>SEARCH</button>
						<button type='button' className='btn width-23'>RESET</button>
						<button type='button' className='btn width-23'>EXPORT</button>
					</div>
				</div>
			</div>
	);
};

export default SearchOrders;