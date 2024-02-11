import React from 'react';
import logo from '../../images/logopink.svg';
import ItemsSideMenu from './ItemsSideMenu';

const SideMenu = () => {
  return (
    <div className='sideMenu column'>
      <div className='logoSideMenu mb-20'>
        <img src={ logo } className='imgSideMenu' alt='logo'/>
      </div>
      <ItemsSideMenu/>
    </div>
  );
};

export default SideMenu;