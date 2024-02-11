import React from 'react';
import { HiOutlineCog8Tooth, HiOutlinePencilSquare, HiOutlinePower, HiOutlineUserCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const Header = () => {
	return (
			<div className='header'>
				<div className='containerHeader row justify-between'>
					<div className='column containerLeft '>
						<div className='nameAdmin'>Admin**********</div>
						<div className='statusAdmin'>Super Administrator</div>
					</div>
					<div className='containerRight row justify-between'>
						<div className='drop-tip'>
							<Link to={ '/admin/list/:id' }>
								<HiOutlineUserCircle className='iconRightPart'/>
							</Link>
							<div className='tip'>Profile</div>
						</div>
						<div className='drop-tip'>
							<Link to={ '/support/sos' }>
								<HiOutlineQuestionMarkCircle className='iconRightPart'/>
							</Link>
							<div className='tip width75'>SOS Requests</div>
						</div>
						<div className='drop-tip'>
							<Link to={ '/support/contact_us' }>
								<HiOutlinePencilSquare className='iconRightPart'/>
							</Link>
							<div className='tip width60'>Contact Us</div>
						</div>
						<div className='drop-tip'>
							<Link to={ '/settings/general' }>
								<HiOutlineCog8Tooth className='iconRightPart'/>
							</Link>
							<div className='tip'>Settings</div>
						</div>
						<div className='drop-tip'>
							<Link to={ '/' }>
								<HiOutlinePower className='iconRightPart'/>
							</Link>
							<div className='tip'>Logout</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Header;