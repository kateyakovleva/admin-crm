import React from 'react';
import { Collapse } from 'react-collapse';
import { Link, useLocation } from 'react-router-dom';
import { IRoute } from '../../types/routes';
import { GoChevronRight, GoCircle } from 'react-icons/go';
import Access from '../access/Access';

interface IProps {
	route: IRoute;
	openCollaps: string;
	setOpenCollaps: ( value: string ) => void;
}

const CollapseSideMenu = ( { route, openCollaps, setOpenCollaps }: IProps ) => {

	const { pathname } = useLocation();
	let className = 'row containerSideMenu';
	if ( pathname.startsWith( route.path ) || openCollaps === route.path ) {
		className += ' linkActive';
	}

	const changeCollapse = () => {
		// route.path - это route - объект, содержащий инфу об адресе, и сам адрес этого роут
		if ( openCollaps === route.path ) { // если глобальное состояние равно уникальному адресу определенной группы страниц (в коллапсе это начальная кнопка, начальный адрес, который потом продолжится), то есть, коллапс открыт
			setOpenCollaps( '' ); // то мы меняем глобальное состояние и закрываем его
		} else {
			setOpenCollaps( route.path ); // в ином случае - мы наоборот его открываем
		}
	};

	return (
			<div className='linkSideMenu column'>
				<button className={ className } onClick={ changeCollapse }>
					{ route.icon }
					<div className='nameItems weight-600'>{ route.name }</div>
					<GoChevronRight
							className={ 'iconSideMenu iconSideMenuBtn ' + ( openCollaps !== route.path ? 'iconSideMenuBtn1' : '' ) }/>
				</button>
				<Collapse isOpened={ openCollaps === route.path } className='containerCollaps column'>
					{ route.children?.map( child => {
						if ( !child.name ) return;

						let className = 'row containerSideMenu';
						if ( pathname === route.path + child.path ) {
							className += ' linkActiveCollaps';
						}

						return (
								<Access key={ child.path } group={ child.permissions?.group } action={ child.permissions?.action }>
									<Link to={ route.path + child.path } className={ className }>
										<GoCircle className='circle'/>
										<div className='nameItems weight-600'>{ child.name }</div>
									</Link>
								</Access>
						);
					} ) }
				</Collapse>
			</div>
	);
};

export default CollapseSideMenu;