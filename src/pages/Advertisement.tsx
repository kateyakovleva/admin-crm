import React from 'react';

import Table from '../components/Table';
import ButtonSettings from '../components/ButtonSettings';
import advert from '../images/reclama.png';
import { useQuery } from 'react-query';
import { getListAdvertisements } from '../stores/advertisement';
import { IAdvertisements } from '../types/advertisement';
import Loader from '../components/Loader';
import Status from '../components/status/Status';
import AdvertisementFilter from '../components/filter/AdvertisementFilter';
import SelectorActions from '../components/selectors/SelectorActions';
import { useFilter } from '../stores/filter';

const Advertisement = () => {
	const filter = useFilter();

	//todo: показы 

	const {
		data: advertisements,
		isLoading
	} = useQuery<IAdvertisements>( [ 'advertisements', filter.toString() ], () => getListAdvertisements() );

	return (
			<div className='advertisement'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Advertisement Banners</div>
					<AdvertisementFilter/>
					<SelectorActions/>
					{ isLoading ?
							<Loader position={ 'static' }/>

							:
							<Table
									items={ advertisements?.items || [] }
									fields={ {
										image: 'Banner Image',
										name: 'Promo Name',
										created_at: 'Activation Date',
										deleted_at: 'Deactivation Date',
										usedimpression: 'Used Impression',
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
										deleted_at: ( item ) =>
												<div>
													{
														item.created_at.substring( 0, 10 )
													}
												</div>,
										image: ( item ) => ( item.image ? <img src={ advert } className='imgBanner padding5'/> : '' ),
										status: ( item ) => <Status status={ item.status }/>,
										actions: ( item ) =>
												<div className='padding5'>
													<ButtonSettings itemId={ item.id }/>
												</div>
									} }
							/>
					}
				</div>
			</div>
	);
};

export default Advertisement;