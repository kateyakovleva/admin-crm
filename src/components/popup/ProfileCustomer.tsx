import React from 'react';
import '../../styles/popup.scss';
import { FiUsers, FiXCircle } from 'react-icons/fi';
import kianu from '../../images/lenar.jpg';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { ICustomerID } from '../../types/customers';
import { $profileCustomer, hideProfileCustomer } from '../../stores/modalContainer';
import { useQuery } from 'react-query';
import { getCustomerID } from '../../stores/customers';
import Loader from '../Loader';

const ProfileCustomer = () => {

	const customerId = useStore( $profileCustomer );

	const {
		data: customer,
		isLoading
	} = useQuery<ICustomerID>( [ customerId, 'customer' ], () => getCustomerID( customerId ) );
	if ( isLoading ) return <Loader/>;

	return (
			<div className='profile popup'>
				<div className='column container mb-20'>
					<div className='row width-100 justify-between border-bottom'>
						<div className='width-23 row align-center justify-between padding20'>
							<FiUsers className='iconPopup'/>
							<div className='textTitlePopup'>User Details</div>
						</div>
						<button
								className='padding20'
								type='button'
								onClick={ () => hideProfileCustomer() }>
							<FiXCircle className='iconPopup'/>
						</button>
					</div>
					<div className='column containerInPopup'>
						<div className='row border-bottom'>
							<div className='width-30 padding10 borderRight'>
								<img src={ kianu } className='imgPopup'/>
							</div>
							<div className='column width-50 padding10'>
								<div className='row justify-between mb-20'>
									<div className='boldTextEdit'>Name</div>
									<div>{ customer?.username }</div>
								</div>
								<div className='row justify-between mb-20'>
									<div className='boldTextEdit'>E-mail</div>
									<div>Joy@****</div>
								</div>
								<div className='row justify-between mb-20'>
									<div className='boldTextEdit'>Phone Number</div>
									<div>44****77</div>
								</div>
								<div className='row justify-between mb-20'>
									<div className='boldTextEdit'>Rating</div>
									<div className='row'>
										<CiStar className='starPopup'/>
										<CiStar className='starPopup'/>
										<CiStar className='starPopup'/>
										<CiStar className='starPopup'/>
										<CiStar className='starPopup'/>
									</div>
								</div>
								<div className='row justify-between'>
									<div className='boldTextEdit'>Status</div>
									<div className='greenBtn'>active</div>
								</div>
							</div>
						</div>
						<div className='row border-bottom'>
							<div className='width-30 padding10 boldTextEdit borderRight'>Country</div>
							<div className='width-50 padding10'>India</div>
						</div>
						<div className='row'>
							<div className='width-30 padding10 boldTextEdit borderRight'>Registration Date</div>
							<div className='width-50 padding10'>Oct, 23 2023</div>
						</div>
					</div>
					<div className='d-flex justify-end padding20'>
						<Link to={ '/invoice' }>
							<button className='btnDetails' onClick={ () => hideProfileCustomer() }>View Order Details</button>
						</Link>
					</div>
				</div>
			</div>
	);
};

export default ProfileCustomer;