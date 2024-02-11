import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import GuestRoute from './components/authorization/GuestRoute';
import LoginPage from './components/layout/LoginPage';
import AuthRoute from './components/authorization/AuthRoute';
import Main from './pages/Main';
import { useStore } from 'effector-react';
import { $auth } from './stores/auth';
import Warnings from './components/Warnings';


function App() {
	const isAuth = useStore( $auth );

	useEffect( () => {
		// getListLanguages().then();
		// if ( isAuth ) {
		// 	fetchAccountInfo().then();
		//
		// 	getListRoles().then();
		// }
	}, [] );

	return (
			<div className="App">
				<Routes>
					{/*это первоначальная страница авториации*/ }
					<Route path={ '/login' } element={ <GuestRoute Component={ LoginPage }/> }/>
					{/*это страница защиты от неавторизованных, если страницу открыть в инкогнито, например*/ }
					<Route path={ '*' } element={ <AuthRoute Component={ Main }/> }/>
				</Routes>
				{/*<Main/>*/ }
				<Warnings/>
			</div>
	);
}

export default App;
