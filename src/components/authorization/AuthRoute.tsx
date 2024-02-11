import React from 'react';
import { useStore } from 'effector-react';
import { $auth } from '../../stores/auth';
import { Navigate } from 'react-router-dom';

interface IRouteProps {
	Component: React.ComponentType<any>; // мой компонент принимает пропс с типом 'компонент' - предустановлено реактом
}

const AuthRoute = ( { Component }: IRouteProps ) => {
	const isAuth = useStore( $auth );

	return isAuth ? <Component/> : <Navigate to="/login"/>; // если авторизован, то отображаем 'компонент', в ином случае переходим на LoginPage
};

export default AuthRoute; 