import React from 'react';

import Notes from '../components/Notes';
import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import { useQuery } from 'react-query';
import { IPromoCodes } from '../types/promocode';
import { getListPromoCodes } from '../stores/promocodes';
import Loader from '../components/Loader';
import Status from '../components/status/Status';
import PromoCodeFilter from '../components/filter/PromoCodeFilter';
import SelectorActions from '../components/selectors/SelectorActions';
import { useFilter } from '../stores/filter';

const PromoCode = () => {
	//todo: all swiger

	const filter = useFilter();

	const {
		data: promocodes,
		isLoading
	} = useQuery<IPromoCodes>( [ 'promocodes', filter.toString() ], () => getListPromoCodes() );

	return (
			<div className='promoCode'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>PromoCode</div>
					<PromoCodeFilter/>
					<SelectorActions/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ promocodes?.items || [] }
									fields={ {
										couponcode: 'PromoCode Name',
										discount: 'Discount',
										created_at: 'Activation Date',
										expiry_at: 'Expiry Date',
										limit: 'Usage Limit',
										usedInScheduleBooking: 'Used In Schedule Booking',
										status: 'Status',
										actions: 'Actions'
									} }
									bodyFieldsClassName={ {
										status: 'thText-center',
										actions: 'thText-center'
									} }
									headFieldsClassName={ {
										status: 'thText-center',
										actions: 'thText-center'
									} }
									columnBody={ {
										created_at: ( item ) =>
												<div>
													{
														item.created_at.substring( 0, 10 )
													}
												</div>,
										expiry_at: ( item ) =>
												<div>
													{
														item.created_at.substring( 0, 10 )
													}
												</div>,
										status: ( item ) => <Status status={ item.status }/>,
										actions: ( item ) =>
												<div className='padding5'>
													<ButtonSettings itemId={ item.id }/>
												</div>
									} }
							/>
					}
					<Notes/>
				</div>
			</div>
	);
};

export default PromoCode;