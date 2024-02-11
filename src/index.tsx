import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient( {
	defaultOptions: {
		queries: {
			staleTime: 0,
			cacheTime: 0,
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
} );

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement );
root.render(
		// <React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={ queryClient }>
				<App/>
			</QueryClientProvider>
		</BrowserRouter>
		// </React.StrictMode>
);


reportWebVitals();