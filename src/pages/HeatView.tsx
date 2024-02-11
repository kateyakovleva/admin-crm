import React from 'react';
import '../styles/heatView.scss';
import { CiLocationOn } from 'react-icons/ci';
import GoogleMaps from '../components/GoogleMaps';
import Notes from '../components/Notes';

const HeatView = () => {
	return (
			<div className='heatView'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Heat View</div>
					<div className='column containerIn mb-10'>
						<div className='d-flex greyTitle border-bottom mb-5'>
							<div className='row justify-center align-center width-10'>
								<CiLocationOn className='iconHeatView'/>
								<div className='textHeatView'>Location</div>
							</div>
						</div>
						<div className='row padding10'>
							<button className='btnHeatView'>Toggle Heatmap</button>
							<button className='btnHeatView'>Change color</button>
							<button className='btnHeatView'>Change radius</button>
							<button className='btnHeatView'>Change opacity</button>
						</div>
						<div className='containerMap padding10'>
							<GoogleMaps/>
						</div>
					</div>
					<Notes/>
				</div>
			</div>
	);
};

export default HeatView;