import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/src/HomePage';
import ProductDetails from './components/src/ProductDetails';
import CartView from './components/src/CartView';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/src/App';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/product/:id",
		element: <ProductDetails />
	},
	{
		path: "/cart",
		element: <CartView />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);