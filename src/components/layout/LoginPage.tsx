import React from 'react';
import '../../styles/loginPage.scss';
import logo from '../../images/logowhite.svg';
import { textLoginPage } from '../../data/localization';
import { loginRequest } from '../../stores/auth';


const LoginPage = () => {

	// у формы усть дефолтное устаревшее поведение с перезагрузкой страницы. тут мы вводим переменную, которой передаем элемент (с которого надо снять это дефолтное поведение
	// ), в теле функции мы отменяем стандартное поведение и передаем новую переменную с функционалом, который собирает всю инфу с формы
	const submit = async ( e: any ) => {
		e.preventDefault();
		const data = new FormData( e.target );
		await loginRequest( data );
	};

	return (
			<div className='loginPage d-flex'>
				<div className='left-part column'>
					<div className='mb-20'>
						<img src={ logo } className='imgLogo' alt='logo'/>
					</div>
					<div className='h2 mb-20'>
						{ textLoginPage.wellcome }
					</div>
					<div className='h3'>
						{ textLoginPage.subWelcome }
					</div>
				</div>
				{/*элемент form содержит все необхдимое для считывания инфы, которую пользователь заносит в поля авторизации (чтобы не писать дополнительную логику для каждого input)*/ }
				<form onSubmit={ submit } className='right-part column'>
					<div className='h1 mb-50'>
						{ textLoginPage.title }
					</div>
					<div className='loginPanel column mb-20'>
						<div className='textInput mb-5 h4'>
							{ textLoginPage.email }
						</div>
						<input className='inputLoginPage h4' name='email' type='email' placeholder='email'/>
					</div>
					<div className='loginPanel column mb-30'>
						<div className='textInput mb-5 h4'>
							{ textLoginPage.password }
						</div>
						<input className='inputLoginPage h4' name='password' type='password' placeholder='password'/>
					</div>
					<button type="submit" className='signIn h4'>{ textLoginPage.signin }</button>
				</form>
			</div>
	);
};

export default LoginPage;