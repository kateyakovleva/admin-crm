import React from 'react';
import { useStore } from 'effector-react';
import { Navigate } from 'react-router-dom';
import { $auth } from '../../stores/auth';


interface IRouteProps {
	Component: React.ComponentType<any>; // мой компонент принимает пропс с типом 'компонент' - предустановлено реактом
}

const GuestRoute = ( { Component }: IRouteProps ) => {
	const isAuth = useStore( $auth );

	return !isAuth ? <Component/> : <Navigate to="/"/>; // если не авторизован, то отображаем 'компонент', в ином случае переходим по роуту дальше
};

export default GuestRoute;
 