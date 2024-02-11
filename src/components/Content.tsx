import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../data/routes';
import Scrollbar from 'react-scrollbars-custom';

const Content = () => {
  return (
    <div className='mt-20 content'>
      <Scrollbar className='scrollBarContent' style={ { width: '100%', height: '100%' } }>
        <Routes>
          { routes.map( route =>
            //это нефизическая обертка для мапа, который может вернуть только 1 элемент из 1 итерации в физической форме (типа в диве), а у нас мап внутри мапа
            // уникальный ключ с path - этого требует мап
            // внутри обертки можно создать сколько угодно элементов, то есть мы можем отмапить внутри мапа
            <React.Fragment key={ route.path }>
              {/*//это создан роут, который является главным*/ }
              { route.content &&
								<Route path={ route.path } element={ route.content }/>
              }
              { route.children?.map( child =>
                <Route path={ `${ route.path }${ child.path }` } element={ child.content } key={ child.path }/>
              ) }
            </React.Fragment>
          ) }
        </Routes>
      </Scrollbar>
    </div>
  );
};

export default Content;