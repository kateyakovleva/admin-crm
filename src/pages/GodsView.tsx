import React from 'react';
import '../styles/godsView.scss';
import Scrollbar from 'react-scrollbars-custom';
import kianu from '../images/lenar.jpg';
import GoogleMaps from '../components/GoogleMaps';

const GodsView = () => {
	return (
			<div className='godsView'>
				{/*//todo: свайгер полностью*/ }
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>Gods View</div>
					<div className='row justify-between mb-20'>
						<button className='btnGodsView'>Enroute to Pickup (0)</button>
						<button className='btnGodsView'>Reached Pickup (1)</button>
						<button className='btnGodsView'>Journey to Pickup (0)</button>
						<button className='btnGodsView'>Available to Pickup (0)</button>
						<button className='btnGodsViewGreen'>All (12)</button>
					</div>
					<div className='d-flex align-center justify-end width-100 mb-20'>
						<div className='row justify-between width-15'>
							<button className='btnGodsViewBlue'>Reset map</button>
							<button className='btnGodsViewBlue'>Refresh</button>
						</div>
					</div>
					<div className='row justify-between'>
						<div className='column width-45 container'>
							<div className='greenTitle'>All</div>
							<input type='text' className='input padding10' placeholder='search person'/>
							<Scrollbar className='scrollGodsView' style={ { width: '100%', height: '100%' } }>
								<div className='row itemPerson align-center justify-start'>
									<div className='imgPerson d-flex align-center justify-center mr-10'>
										<img src={ kianu } className='width-100'/>
										<div className='status'></div>
									</div>
									<div className='column'>
										<div className='textName'>Keisha</div>
										<div className='textId'>12********98</div>
									</div>
								</div>
								<div className='row itemPerson align-center justify-start'>
									<div className='imgPerson d-flex align-center justify-center mr-10'>
										<img src={ kianu } className='width-100'/>
										<div className='status'></div>
									</div>
									<div className='column'>
										<div className='textName'>Keisha</div>
										<div className='textId'>12********98</div>
									</div>
								</div>
								<div className='row itemPerson align-center justify-start'>
									<div className='imgPerson d-flex align-center justify-center mr-10'>
										<img src={ kianu } className='width-100'/>
										<div className='status'></div>
									</div>
									<div className='column'>
										<div className='textName'>Keisha</div>
										<div className='textId'>12********98</div>
									</div>
								</div>
								<div className='row itemPerson align-center justify-start'>
									<div className='imgPerson d-flex align-center justify-center mr-10'>
										<img src={ kianu } className='width-100'/>
										<div className='status'></div>
									</div>
									<div className='column'>
										<div className='textName'>Keisha</div>
										<div className='textId'>12********98</div>
									</div>
								</div>
								<div className='row itemPerson align-center justify-start'>
									<div className='imgPerson d-flex align-center justify-center mr-10'>
										<img src={ kianu } className='width-100'/>
										<div className='status'></div>
									</div>
									<div className='column'>
										<div className='textName'>Keisha</div>
										<div className='textId'>12********98</div>
									</div>
								</div>
							</Scrollbar>
						</div>
						<div className='width-55 container'>
							<GoogleMaps/>
						</div>
					</div>
				</div>
			</div>
	);
};

export default GodsView;