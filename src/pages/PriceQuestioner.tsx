import React from 'react';
import '../../styles/priceQuestioner.scss';

const PriceQuestioner = () => {
	return (
			<div className='priceQuestioner'>
				<div className='boldTextEdit mb-20'>Price<span className='red-star'>*</span></div>
				<table className='table'>
					<thead className='thead'>
					<th className='text-start'>Time</th>
					<th className='text-start'>Apartment</th>
					<th className='text-start'>Departure</th>
					</thead>
					<tbody className='tbody'>
					<tr className='tr-container colorBlack'>
						<td className='weight-600'>1 hour</td>
						<td>
							<input className='input' type='number' placeholder='500'/>
						</td>
						<td>
							<input className='input' type='number' placeholder='900'/>
						</td>
					</tr>
					<tr className='tr-container colorBlack'>
						<td className='weight-600'>2 hours</td>
						<td>
							<input className='input' type='number' placeholder='1500'/>
						</td>
						<td>
							<input className='input' type='number' placeholder='2500'/>
						</td>
					</tr>
					<tr className='tr-container colorBlack'>
						<td className='weight-600'>Night</td>
						<td>
							<input className='input' type='number' placeholder='13700'/>
						</td>
						<td>
							<input className='input' type='number' placeholder='19500'/>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
	);
};

export default PriceQuestioner;