import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import MainView from "./MainView";
import ProductDetails from "./ProductDetails";
import CartView from "./CartView";

function App() {

	const [state, setState] = useState(
		JSON.parse(localStorage.getItem("state")) || {
		products: [],
		cart: {},
		heading: "All Products",
		pageNumber: 1,
		emptyMessage: "Loading...",
		view: -1,
		isSearch: false,
		recordsPerPage: 8
	});

	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]);

	async function handleStateChange(mode, data) {
		if (mode === "all") {
			const response = await axios.get("https://dummyjson.com/products?limit=150");
			setState({
				...state,
				products: response.data["products"],
				heading: "All Products",
				pageNumber: 1,
				isSearch: false,
				emptyMessage: "Loading...",
				view: -1,
			});
		} else if (mode === "search") {
			const response = await axios.get(`https://dummyjson.com/products/search`, {
				params: {
					q: data,
					limit: 150,
					view: -1,
				}
			});
			setState({
				...state,
				products: response.data["products"],
				heading: `Search Results for "${data}"`,
				pageNumber: 1,
				isSearch: true,
				view: -1,
				emptyMessage: "No products found."
			});
		} else if (mode === "category") {
			const response = await axios.get(`https://dummyjson.com/products/category/${data}?limit=150`);
			setState({
				...state,
				products: response.data["products"],
				heading: data.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
				pageNumber: 1,
				isSearch: false,
				view: -1,
				emptyMessage: "Loading..."
			});
		} else if (mode === "cart") {
			setState({
				...state,
				isSearch: false,
				cart: data
			});
		} else if (mode === "page") {
			setState({
				...state,
				pageNumber: data
			});
		} else if (mode === "view") {
			setState({
				...state,
				isSearch: false,
				view: data
			});
		}
	}

	function modifyCart(mode, product) {
		if (mode === "add") {
			handleStateChange("cart", {
				...state.cart,
				[product.id]: {
					...product,
					quantity: state.cart[product.id] ? state.cart[product.id].quantity + 1 : 1
				}
			});
		} else {
			const newQuantity = state.cart[product.id].quantity - 1;
			if (newQuantity === 0) {
				const newCart = { ...state.cart };
				delete newCart[product.id];
				handleStateChange("cart", newCart);
			} else {
				handleStateChange("cart", {
					...state.cart,
					[product.id]: {
						...state.cart[product.id],
						quantity: newQuantity
					}
				});
			}
		}
	}

	let viewToRender;
	if (state.view === -1) {
		viewToRender = <MainView state={state} updateData={handleStateChange} modifyCart={modifyCart}/>;
	} else if (state.view === -2) {
		viewToRender = <CartView state={state} updateData={handleStateChange} modifyCart={modifyCart}/>;
	} else {
		viewToRender = <ProductDetails state={state} updateData={handleStateChange} modifyCart={modifyCart}/>;
	}

	return (
		<div className="App">
			<Header updateData={handleStateChange} state={state}/>
			{viewToRender}
		</div>
	);
}

export default App;