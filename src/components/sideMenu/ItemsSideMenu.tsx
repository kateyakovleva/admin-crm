import React, { useState } from 'react';
import '../../styles/itemsSideMenu.scss';
import CollapseSideMenu from './CollapseSideMenu';
import LinkSideMenu from './LinkSideMenu';
import Scrollbar from 'react-scrollbars-custom';
import { routes } from '../../data/routes';
import Access from '../access/Access';


const ItemsSideMenu = () => {

	const [ openCollaps, setOpenCollaps ] = useState( '' );

	return (
			<div className='itemsSideMenu'>
				<Scrollbar style={ { width: '100%', height: '100%' } }>
					{ routes.map( route => {
						if ( !route.name ) return <></>;
						if ( route.content ) return (
								<Access group={ route.permissions?.group } action={ route.permissions?.action }>
									<LinkSideMenu
											key={ route.path }
											route={ route }
											openCollaps={ openCollaps }
											setOpenCollaps={ setOpenCollaps }
									/>
								</Access>
						);
						return <CollapseSideMenu
								key={ route.path }
								route={ route }
								openCollaps={ openCollaps }
								setOpenCollaps={ setOpenCollaps }
						/>;
					} ) }
				</Scrollbar>
			</div>
	);
};

export default ItemsSideMenu;

