import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IRoute } from '../../types/routes';

interface IProps {
  route: IRoute;
  openCollaps: string;
  setOpenCollaps: ( value: string ) => void;
}

const LinkSideMenu = ( { route, openCollaps, setOpenCollaps }: IProps ) => {

  const { pathname } = useLocation();
  let className = 'row containerSideMenu';
  if ( pathname === route.path && !openCollaps ) {
    className += ' linkActive';
  }

  const onClick = () => {
    setOpenCollaps( '' );
  };

  return (
    <Link onClick={ onClick } to={ route.path } className={ className }>
      { route.icon }
      <div className='nameItems weight-600'>{ route.name }</div>
    </Link>

  );
};

export default LinkSideMenu;