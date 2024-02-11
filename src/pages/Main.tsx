import React from 'react';
import '../styles/main.scss';
import SideMenu from '../components/sideMenu/SideMenu';
import Header from '../components/Header';
import Content from '../components/Content';
import ModalContainer from '../components/ModalContainer';

const Main = () => {

	return (
			<div className='dashboard row'>
				<SideMenu/>
				<div className='column width-100'>
					<Header/>
					<Content/>
				</div>
				<ModalContainer/>
			</div>
	);
};

export default Main;